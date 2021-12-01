import React, { useState } from 'react';
import { selectUser, useAppDispatch, useAppSelector } from '../../../../store/hooks';

import AuthForm from './AuthForm';
import PageSection from '../../../../components/PageSection';
import Path from '../../../../shared/model/Path';
import { Redirect } from 'react-router-dom';
import { googleSignup } from './userSlice';
import ApiAgent from '../../../../shared/agent/ApiAgent';
import { AuthResultCode } from '../../../../shared/model/AuthResultCode';

export default function SignUpPage() {
	const [isSuccess, setIsSuccess] = useState(false);
	const onSubmit = async (username: string, password: string, passwordCheck: string) => {
		ApiAgent.post<{ resultCode: AuthResultCode }>('auth/signup/local', {
			username,
			password,
		}).then(({ resultCode }) => {
			switch (resultCode) {
				case 'ERROR':
					setIsSuccess(false);
					break;
				case 'EXIST':
					setIsSuccess(false);
					break;
				case 'SUCCESS':
					setIsSuccess(true);
					break;

				default:
					break;
			}
		});
	};
	const { user } = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	return (
		<PageSection>
			<AuthForm
				type="register"
				onSubmit={onSubmit}
				onSuccessGoogle={(response) => {
					dispatch(googleSignup(response.tokenId));
				}}
				onFailGoogle={() => {}}
			/>
			{isSuccess && <Redirect to={Path.LOGIN} />}
		</PageSection>
	);
}

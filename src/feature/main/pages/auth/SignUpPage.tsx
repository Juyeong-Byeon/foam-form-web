import React, { useRef, useState } from 'react';
import { selectUser, useAppDispatch, useAppSelector } from '../../../../store/hooks';

import AuthForm from './AuthForm';
import PageSection from '../../../../components/PageSection';
import Path from '../../../../shared/model/Path';
import { Redirect } from 'react-router-dom';
import { googleSignup } from './userSlice';
import ApiAgent from '../../../../shared/agent/ApiAgent';
import { AuthResultCode } from '../../../../shared/model/AuthResultCode';
import SignInValidator from './model/SignUpValidator';
import User from '../../../../shared/model/User';
export default function SignUpPage() {
	const [isSuccess, setIsSuccess] = useState(false);
	const { current: signInValidator } = useRef(new SignInValidator());
	const { user } = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const onSubmit = async (username: string, password: string, passwordCheck: string) => {
		console.log('!!!');

		ApiAgent.post<{ resultCode: AuthResultCode }>('auth/signup/local', {
			username,
			password,
		}).then(({ resultCode }) => {
			switch (resultCode) {
				case 'SUCCESS':
					setIsSuccess(true);
					break;

				case 'EXIST':
					alert('이미 등록된 이메일입니다.');
					setIsSuccess(false);
					break;

				case 'ERROR':
				default:
					setIsSuccess(false);
					alert('잠시후에 다시시도해주세요');
					break;
			}
		});
	};

	return (
		<PageSection>
			<AuthForm
				type="register"
				onSubmit={onSubmit}
				onSuccessGoogle={(response) => {
					dispatch(googleSignup(response.tokenId));
				}}
				onFailGoogle={() => {}}
				authValidator={signInValidator}
			/>
			{isSuccess && <Redirect to={Path.LOGIN} />}
			{User.isLoginUser(user) && <Redirect to={Path.HOME} />}
		</PageSection>
	);
}

import React, { useRef, useState } from 'react';
import { selectUser, useAppSelector } from '../../../../store/hooks';

import ApiAgent from '../../../../shared/agent/ApiAgent';
import { ApiResponseStatus } from '../../../../shared/model/ApiResponseStatus';
import AuthForm from './AuthForm';
import PageSection from '../../../../components/PageSection';
import Path from '../../../../shared/model/Path';
import { Redirect } from 'react-router-dom';
import SignInValidator from './model/SignUpValidator';
import User from '../../../../shared/model/User';
import { signUpStatusMessageMap } from './model/SignUpStatusMessage';

export default function SignUpPage() {
	const [isSuccess, setIsSuccess] = useState(false);
	const { current: signInValidator } = useRef(new SignInValidator());
	const { user } = useAppSelector(selectUser);

	const onAfterSubmit = (resultCode: ApiResponseStatus) => {
		const { message, isSuccess } = signUpStatusMessageMap[resultCode];
		alert(message);
		setIsSuccess(isSuccess);
	};

	const onSubmit = async (username: string, password: string) => {
		const { resultCode = 'ERROR' } = await ApiAgent.post<{ resultCode: ApiResponseStatus }>(
			'auth/signup/local',
			{
				username,
				password,
			},
		);

		onAfterSubmit(resultCode);
	};

	const onSuccessGoogle = async (tokenId: string) => {
		const { resultCode = 'ERROR' } = await ApiAgent.post<{ resultCode: ApiResponseStatus }>(
			'auth/signup/google',
			{
				tokenId,
			},
		);
		onAfterSubmit(resultCode);
	};

	return (
		<PageSection>
			<AuthForm
				type="register"
				onSubmit={onSubmit}
				onSuccessGoogle={(response) => onSuccessGoogle(response.tokenId)}
				onFailGoogle={() => {}}
				authValidator={signInValidator}
			/>
			{isSuccess && <Redirect to={Path.LOGIN} />}
			{User.isLoginUser(user) && <Redirect to={Path.HOME} />}
		</PageSection>
	);
}

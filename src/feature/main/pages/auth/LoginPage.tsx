import { selectUser, useAppDispatch, useAppSelector } from '../../../../store/hooks';

import AuthForm from './AuthForm';
import PageSection from '../../../../components/PageSection';
import Path from '../../../../shared/model/Path';
import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import User from '../../../../shared/model/User';

import { useLogin } from './hooks';
import LoginValidator from './model/LoginValidator';

export default function LoginPage() {
	const { user } = useAppSelector(selectUser);
	const isLoginUser = User.isLoginUser(user);
	const { submit } = useLogin();
	const { current: loginValidator } = useRef(new LoginValidator());

	return (
		<PageSection>
			<AuthForm
				type="login"
				onSubmit={submit}
				onSuccessGoogle={() => {}}
				onFailGoogle={() => {}}
				authValidator={loginValidator}
			/>
			{isLoginUser && <Redirect to={Path.HOME} />}
		</PageSection>
	);
}

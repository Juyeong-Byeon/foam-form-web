import { selectUser, useAppDispatch, useAppSelector } from '../../../../store/hooks';

import AuthForm from './AuthForm';
import PageSection from '../../../../components/PageSection';
import Path from '../../../../shared/model/Path';
import React from 'react';
import { Redirect } from 'react-router-dom';
import User from '../../../../shared/model/User';
import { googleSignup } from './userSlice';
import { useLogin } from './hooks';

export default function LoginPage() {
	const { user } = useAppSelector(selectUser);
	const isLoginUser = User.isLoginUser(user);
	const { submit } = useLogin();

	return (
		<PageSection>
			<AuthForm type="login" onSubmit={submit} onSuccessGoogle={() => {}} onFailGoogle={() => {}} />
			{isLoginUser && <Redirect to={Path.HOME} />}
		</PageSection>
	);
}

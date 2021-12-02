import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import React, { useState } from 'react';

import Button from '../../../../components/Button';
import Path from '../../../../shared/model/Path';
import { StyledInput } from '../../../../components/StyledInput';
import TitledForm from '../../../../components/TitledForm';
import styled from 'styled-components';
import AuthValidator from './model/AuthValidator';
import { StatusWrapper } from '../../../../components/StateWrapper';

const LoginWrapper = styled.div`
	width: ${({ theme }) => theme.common.pixelToRem(440)};
`;

const ButtonsWrapper = styled.div`
	${({ theme }) => theme.common.flexCenter}
	flex-direction: column;
	font-weight: 500;

	button {
		width: -webkit-fill-available;
		margin: ${({ theme }) => theme.common.pixelToRem(24)} 0;
		border-radius: ${({ theme }) => theme.common.pixelToRem(24)} !important;
		font-size: ${({ theme }) => theme.fontSizes.paragraph} !important;
		height: ${({ theme }) => theme.common.pixelToRem(54)};
	}
`;

type AuthType = 'register' | 'login';

interface AuthFormProps {
	type: AuthType;
	onSubmit: (id: string, password: string, passwordCheck: string) => void;
	onSuccessGoogle: (response: GoogleLoginResponse) => void;
	onFailGoogle: () => void;
	authValidator: AuthValidator;
}

export default function AuthForm({ type, onSubmit, onSuccessGoogle, onFailGoogle, authValidator }: AuthFormProps) {
	const title = type === 'register' ? '회원가입' : '로그인';

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');

	const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
	const onChangePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) =>
		setPasswordCheck(event.currentTarget.value);
	const submit = () => onSubmit(username, password, passwordCheck);

	const getStatus = (success: boolean) => (success ? 'SUCCESS' : 'WARN');

	const { validatePassword, validatePasswordCheck, validateUsername } = authValidator;

	return (
		<LoginWrapper>
			<TitledForm title={title}>
				<StatusWrapper
					state={getStatus(validateUsername(username).isValid)}
					message={validateUsername(username)?.message}
				>
					<StyledInput
						name="id"
						value={username}
						onChange={onChangeId}
						placeholder="아이디"
						autoComplete="id"
					/>
				</StatusWrapper>
				<StatusWrapper
					state={getStatus(validatePassword(password).isValid)}
					message={validatePassword(password)?.message}
				>
					<StyledInput
						name="password"
						value={password}
						onChange={onChangePassword}
						placeholder="비밀번호"
						type="password"
						autoComplete="password"
					/>
				</StatusWrapper>
				{type === 'register' && (
					<StatusWrapper
						state={getStatus(validatePasswordCheck(password, passwordCheck).isValid)}
						message={validatePasswordCheck(password, passwordCheck)?.message}
					>
						<StyledInput
							name="passwordCheck"
							value={passwordCheck}
							onChange={onChangePasswordCheck}
							placeholder="비밀번호 확인"
							type="password"
							autoComplete="password"
						/>
					</StatusWrapper>
				)}
			</TitledForm>
			<ButtonsWrapper>
				<Button
					disabled={
						!validateUsername(username).isValid ||
						!validatePassword(password).isValid ||
						!validatePasswordCheck(password, passwordCheck).isValid
					}
					onClick={submit}
					invert
				>
					{title}
				</Button>
				OR
				<GoogleLogin
					style={{ border: 'solid', borderRadius: '24px' }}
					clientId={process.env.GOOGLE_CLIENT_ID}
					buttonText={`구글 아이디로 ${title}`}
					onSuccess={onSuccessGoogle}
					onFailure={onFailGoogle}
					cookiePolicy="single_host_origin"
					redirectUri={type === 'register' ? Path.REGISTER : Path.LOGIN}
				/>
			</ButtonsWrapper>
		</LoginWrapper>
	);
}

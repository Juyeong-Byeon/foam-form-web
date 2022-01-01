import React from 'react';
import Button from '../../components/Button';
import Path from '../../shared/model/Path';
import User from '../../shared/model/User';
import styled from 'styled-components';
import { StyledLink } from '../../components/StyledLink';

const HeaderRightWrapper = styled.div`
	color: ${({ theme }) => theme.colors.primary};
`;

const SubLink = styled(StyledLink)`
	margin-right: ${({ theme }) => theme.spacing.s};
`;

interface HeaderRightProps {
	user: User;
	pathName: string;
	onClickLogin: () => void;
	onClickSignUp: () => void;
}
export default function HeaderRight({
	user,
	pathName,
	onClickLogin,
	onClickSignUp,
}: HeaderRightProps) {
	return (
		<HeaderRightWrapper>
			{!User.isLoginUser(user) &&
				(pathName === Path.REGISTER ? (
					<>
						<SubLink to={Path.LOGIN}>이미 회원이신가요?</SubLink>
						<Button onClick={onClickLogin} invert>
							로그인
						</Button>
					</>
				) : (
					<>
						<SubLink to={Path.REGISTER}> 아직 계정이 없으신가요?</SubLink>
						<Button onClick={onClickSignUp} invert>
							회원가입
						</Button>
					</>
				))}
		</HeaderRightWrapper>
	);
}

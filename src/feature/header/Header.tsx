import { selectUser, useAppSelector } from '../../store/hooks';
import { useHistory, useLocation } from 'react-router-dom';
import HeaderRight from './HeaderRight';
import Path from '../../shared/model/Path';
import React from 'react';
import ServerPath from '../../shared/model/ServerPath';
import styled from 'styled-components';
import { withErrorBoundaryView } from '../../hoc/withFallbackView';

const StyledHeader = styled.header`
	height: 56px;
	padding: ${({ theme }) => theme.spacing.l};
	${({ theme }) => theme.common.flexCenter};
	justify-content: space-between;
`;

const ClickableImg = styled.img`
	cursor: pointer;
`;

function Header() {
	const { user } = useAppSelector(selectUser);
	const history = useHistory();
	const location = useLocation();

	const onClickLogo = () => {
		history.push(Path.HOME);
	};

	const onClickLogin = () => {
		history.push(Path.LOGIN);
	};

	const onClickSignUp = () => {
		history.push(Path.REGISTER);
	};

	return (
		<StyledHeader>
			<ClickableImg
				onClick={onClickLogo}
				src={ServerPath.getFullPath(ServerPath.Logo)}
				alt="main logo"
			/>
			<HeaderRight
				user={user}
				onClickLogin={onClickLogin}
				onClickSignUp={onClickSignUp}
				pathName={location.pathname}
			/>
		</StyledHeader>
	);
}

export default withErrorBoundaryView(Header);

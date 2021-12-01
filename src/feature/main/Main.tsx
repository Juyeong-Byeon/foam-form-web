import { Route, Switch } from 'react-router-dom';

import EditorPage from './pages/editor/EditorPage';
import LoginPage from './pages/auth/LoginPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Path from '../../shared/model/Path';
import React from 'react';
import SignUpPage from './pages/auth/SignUpPage';
import styled from 'styled-components';

const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main() {
	return (
		<StyledMain>
			<Switch>
				<Route path={Path.HOME} component={MainPage} exact />
				<Route path={Path.REGISTER} component={SignUpPage} exact />
				<Route path={Path.LOGIN} component={LoginPage} exact />
				<Route path={Path.EDITOR} component={EditorPage} exact />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</StyledMain>
	);
}

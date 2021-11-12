import { Route, Switch } from "react-router-dom";

import EditorPage from "./pages/editor/EditorPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import Path from "../../model/Path";
import React from "react";
import User from "../../model/User";
import WelcomePage from "./pages/welcome/welcomePage";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

interface MainProps {
  user: User;
}

export default function Main() {
  return (
    <StyledMain>
      <Switch>
        <Route path={Path.HOME} component={MainPage} exact />
        <Route path={Path.LOGIN} component={LoginPage} exact />
        <Route path={Path.WELCOME} component={WelcomePage} exact />
        <Route path={Path.EDITOR} component={EditorPage} exact />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </StyledMain>
  );
}

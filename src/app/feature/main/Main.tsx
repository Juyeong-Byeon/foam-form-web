import { Link, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/MainPage";
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

export default function Main({ user }: MainProps) {
  const isLoginUser = User.isLoginUser(user);

  return (
    <StyledMain>
      <Routes>
        <Route path={Path.HOME} element={<MainPage />} />
        <Route path={Path.LOGIN} element={<LoginPage />} />
        <Route path={Path.WELCOME} element={<WelcomePage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </StyledMain>
  );
}

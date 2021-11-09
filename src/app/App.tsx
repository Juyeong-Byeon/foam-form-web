import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { selectUser, useAppDispatch, useAppSelector } from "./store/hooks";

import Header from "./components/Header";
import LoginPage from "./feature/login/LoginPage";
import Path from "./model/Path";
import User from "./model/User";
import WelcomePage from "./feature/welcome/welcomePage";

export default function App() {
  const { user, isNewComer } = useAppSelector(selectUser);
  const isLoginUser = User.isLoginUser(user);
  return (
    <section>
      <Header />
      <Routes>
        <Route
          path={Path.HOME}
          element={
            <>
              {isLoginUser ? (
                <>
                  <h1>welcome home</h1>
                  <h1>반갑습니다 {user.name} 님!</h1>
                </>
              ) : (
                <Link to="/login">login</Link>
              )}
            </>
          }
        />
        <Route path={Path.LOGIN} element={<LoginPage />} />
        <Route path={Path.WELCOME} element={<WelcomePage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </section>
  );
}

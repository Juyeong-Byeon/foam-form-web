import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { selectUser, useAppDispatch, useAppSelector } from "./store/hooks";

import Header from "./feature/header/Header";
import LoginPage from "./feature/main/pages/login/LoginPage";
import Main from "./feature/main/Main";
import Path from "./model/Path";
import User from "./model/User";
import WelcomePage from "./feature/main/pages/welcome/welcomePage";

export default function App() {
  const { user, isNewComer } = useAppSelector(selectUser);
  return (
    <>
      <Header user={user} />
      <Main user={user} />
    </>
  );
}

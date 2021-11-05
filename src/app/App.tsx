import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { selectUser, useAppDispatch, useAppSelector } from "./store/hooks";

import LoginPage from "./feature/login/LoginPage";
import Path from "./model/Path";

export default function App() {
  const user = useAppSelector(selectUser);

  return (
    <section>
      <Routes>
        <Route
          path={Path.HOME}
          element={
            <>
              {user.isLogin ? <h1>welcome</h1> : <Link to="/login">login</Link>}
            </>
          }
        />
        <Route path={Path.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </section>
  );
}

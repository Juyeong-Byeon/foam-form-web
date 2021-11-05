import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import LoginPage from "./feature/login/LoginPage";
import { countAdded } from "./feature/counterSlice";

export default function App() {
  const count = useAppSelector(({ counter }) => counter.count);
  const dispatch = useAppDispatch();

  return (
    <section>
      <Routes>
        <Route path="/" element={<Link to="/login">login</Link>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </section>
  );
}

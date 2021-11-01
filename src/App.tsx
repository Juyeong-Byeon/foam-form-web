import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { countAdded } from "./app/feature/counterSlice";

export default function App() {
  const count = useAppSelector(({ counter }) => counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <h2>{count}</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(countAdded(count + 1))}>++</button>
    </div>
  );
}

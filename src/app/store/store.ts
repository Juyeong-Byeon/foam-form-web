import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";
import userReducer from "../feature/login/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

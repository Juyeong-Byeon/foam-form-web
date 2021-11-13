import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import User from "../../../../model/User";
import axios from "axios";

type LoginType = "guest" | "google" | "integrated";
interface UserState {
  user: User;
  loginType: LoginType;
  isNewComer?: boolean;
}

const initialState: UserState = {
  user: {
    idx: -1,
    name: "",
    email: "",
  },
  loginType: "guest",
  isNewComer: false,
};

export const login = createAsyncThunk("user/login", async (token: string) => {
  const { data } = await axios.post<UserState>(
    "http://localhost:8000/api/login/google",
    {
      googleToken: token,
    }
  );

  console.log(data);

  if (0 < data?.user?.idx) return data;
  else throw Error("로그인에 실패했습니다.");
});

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state: UserState, payloadAction: PayloadAction<UserState>) => {
          state.user = payloadAction.payload.user;
          state.loginType = payloadAction.payload.loginType;
          state.isNewComer = payloadAction.payload.isNewComer;
        }
      )
      .addCase(login.rejected, (state: UserState) => {
        state.isNewComer = false;
        state.user = initialState.user;
      });
  },
});

export default userReducer.reducer;
export const {} = userReducer.actions;

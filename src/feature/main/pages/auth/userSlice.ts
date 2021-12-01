import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import User from "../../../../model/User";
import axios from "axios";

type LoginType = "guest" | "google" | "integrated";
interface UserState {
  user: User;
  loginType: LoginType;
  isNewComer?: boolean;
  errorCode?: string;
}

const initialState: UserState = {
  user: {
    idx: -1,
    username: "",
    email: "",
  },
  loginType: "guest",
  isNewComer: false,
  errorCode: undefined,
};

export const googleSignup = createAsyncThunk(
  "user/google/login",
  async (token: string) => {
    const { data } = await axios.post<UserState>(
      "http://localhost:8000/api/auth/signup/google",
      {
        googleToken: token,
      }
    );

    console.log(data);

    if (0 < data?.user?.idx) return data;
    else throw Error("가입에 실패했습니다.");
  }
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        googleSignup.fulfilled,
        (state: UserState, payloadAction: PayloadAction<UserState>) => {
          state.user = payloadAction.payload.user;
          state.loginType = payloadAction.payload.loginType;
          state.isNewComer = payloadAction.payload.isNewComer;
        }
      )
      .addCase(googleSignup.rejected, (state: UserState) => {
        state.isNewComer = false;
        state.user = initialState.user;
      });
  },
});

export default userReducer.reducer;
export const {} = userReducer.actions;

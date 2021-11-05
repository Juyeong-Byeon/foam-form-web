import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  isLogin: boolean;
}

const initialState: User = {
  isLogin: false,
};

export const login = createAsyncThunk("user/login", async (token: string) => {
  return token;
});

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state: User, payloadAction: PayloadAction<any>) => {
        state.isLogin = payloadAction.payload;
      }
    );
  },
});

export default userReducer.reducer;
export const {} = userReducer.actions;

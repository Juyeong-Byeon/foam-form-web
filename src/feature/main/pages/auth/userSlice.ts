import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import User from '../../../../shared/model/User';

type LoginType = 'guest' | 'google' | 'integrated';
interface UserState {
	user: User;
	loginType: LoginType;
	isNewComer?: boolean;
	errorCode?: string;
}

const initialState: UserState = {
	user: {
		idx: -1,
		username: '',
		email: '',
	},
	loginType: 'guest',
	isNewComer: false,
	errorCode: undefined,
};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		//
	},
	extraReducers: (builder) => {},
});

export default userReducer.reducer;
export const {} = userReducer.actions;

import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import {
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks";

import { Navigate } from "react-router-dom";
import Path from "../../../../model/Path";
import React from "react";
import User from "../../../../model/User";
import { login } from "./userSlice";

export default function LoginPage() {
  const { user, isNewComer } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const isLoginUser = User.isLoginUser(user);
  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={(response: GoogleLoginResponse) => {
          dispatch(login(response.tokenId));
        }}
        onFailure={(response) => {}}
        cookiePolicy={"single_host_origin"}
        redirectUri="/login"
        isSignedIn={isLoginUser}
      />
      {isLoginUser && <Navigate to={isNewComer ? Path.WELCOME : Path.HOME} />}
    </div>
  );
}

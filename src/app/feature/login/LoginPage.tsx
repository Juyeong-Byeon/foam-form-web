import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { selectUser, useAppDispatch, useAppSelector } from "../../store/hooks";

import { Navigate } from "react-router-dom";
import Path from "../../model/Path";
import React from "react";
import { login } from "./userSlice";

export default function LoginPage() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  console.log(user);
  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={(response: GoogleLoginResponse) => {
          dispatch(login(response.accessToken));
        }}
        onFailure={(response) => {}}
        cookiePolicy={"single_host_origin"}
        redirectUri="/login"
        isSignedIn={user.isLogin}
      />
      {user.isLogin && <Navigate to={Path.HOME} />}
    </div>
  );
}

import {
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks";

import AuthForm from "./AuthForm";
import PageSection from "../../../../components/PageSection";
import Path from "../../../../model/Path";
import React from "react";
import { Redirect } from "react-router-dom";
import User from "../../../../model/User";
import { login } from "./userSlice";
import { useLogin } from "./hooks";

export default function LoginPage() {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const isLoginUser = User.isLoginUser(user);
  const { submit } = useLogin();

  return (
    <PageSection>
      <AuthForm
        type="login"
        onSubmit={submit}
        onSuccessGoogle={(response) => {
          dispatch(login(response.tokenId));
        }}
        onFailGoogle={() => {}}
      />
      {isLoginUser && <Redirect to={Path.HOME} />}
    </PageSection>
  );
}

import React, { useState } from "react";
import {
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks";

import AuthForm from "./AuthForm";
import PageSection from "../../../../components/PageSection";
import Path from "../../../../model/Path";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { googleSignup } from "./userSlice";

export default function SignUpPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = async (
    username: string,
    password: string,
    passwordCheck: string
  ) => {
    const { data } = await axios.post<{ success: boolean; message: string }>(
      "http://localhost:8000/api/auth/signup/local",
      {
        username,
        password,
      }
    );

    setIsSuccess(data.success);
  };
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <PageSection>
      <AuthForm
        type="register"
        onSubmit={onSubmit}
        onSuccessGoogle={(response) => {
          dispatch(googleSignup(response.tokenId));
        }}
        onFailGoogle={() => {}}
      />
      {isSuccess && <Redirect to={Path.LOGIN} />}
    </PageSection>
  );
}

import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import React, { useState } from "react";

import Button from "../../../../components/Button";
import Path from "../../../../model/Path";
import { StyledInput } from "../../../../components/StyledInput";
import TitledForm from "../../../../components/TitledForm";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: ${({ theme }) => theme.common.pixelToRem(440)};
`;

const ButtonsWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  font-weight: 500;

  button {
    width: -webkit-fill-available;
    margin: ${({ theme }) => theme.common.pixelToRem(24)} 0;
    border-radius: ${({ theme }) => theme.common.pixelToRem(24)} !important;
    font-size: ${({ theme }) => theme.fontSizes.paragraph} !important;
    height: ${({ theme }) => theme.common.pixelToRem(54)};
  }
`;

type AuthType = "register" | "login";

type InputName = "password" | "passwordCheck" | "id";

interface AuthFormProps {
  type: AuthType;
  onSubmit: (id: string, password: string, passwordCheck: string) => void;
  onSuccessGoogle: (response: GoogleLoginResponse) => void;
  onFailGoogle: () => void;
  IDValidator?: (id: string) => string;
  passwordValidator?: (pass: string) => string;
  passwordCheckValidator?: (pass: string) => string;
}

export default function AuthForm({
  type,
  onSubmit,
  onSuccessGoogle,
  onFailGoogle,
}: AuthFormProps) {
  const title = type === "register" ? "회원가입" : "로그인";

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    switch (name as InputName) {
      case "password":
        setPassword(value);
        break;

      case "passwordCheck":
        setPasswordCheck(value);
        break;

      case "id":
        setId(value);
        break;

      default:
        throw Error("invalid input");
    }
  };

  const submit = () => {
    onSubmit(id, password, passwordCheck);
  };

  return (
    <LoginWrapper>
      <TitledForm title={title}>
        <StyledInput
          name="id"
          value={id}
          onChange={onChange}
          placeholder="아이디"
          autoComplete="id"
        />
        <StyledInput
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
          type="password"
          autoComplete="password"
        />
        {type === "register" && (
          <StyledInput
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChange}
            placeholder="비밀번호 확인"
            type="password"
            autoComplete="password"
          />
        )}
      </TitledForm>
      <ButtonsWrapper>
        <Button onClick={submit} invert>
          {title}
        </Button>
        OR
        <GoogleLogin
          style={{ border: "solid", borderRadius: "24px" }}
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText={`구글 아이디로 ${title}`}
          onSuccess={onSuccessGoogle}
          onFailure={onFailGoogle}
          cookiePolicy="single_host_origin"
          redirectUri={type === "register" ? Path.REGISTER : Path.LOGIN}
        />
      </ButtonsWrapper>
    </LoginWrapper>
  );
}

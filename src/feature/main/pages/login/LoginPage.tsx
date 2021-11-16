import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import {
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks";

import Button from "../../../../components/Button";
import PageSection from "../../../../components/PageSection";
import Path from "../../../../model/Path";
import React from "react";
import { Redirect } from "react-router-dom";
import { StyledInput } from "../../../../components/StyledInput";
import TitledForm from "../../../../components/TitledForm";
import User from "../../../../model/User";
import { login } from "./userSlice";
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
    /* box-shadow: none !important;
    border: solid 1px !important;
    border-color: ${({ theme }) => theme.colors.border} !important;
   
   
    text-align: center !important; */
  }
`;

export default function LoginPage() {
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const isLoginUser = User.isLoginUser(user);
  return (
    <PageSection>
      <LoginWrapper>
        <TitledForm title="로그인">
          <StyledInput placeholder="아이디" />
          <StyledInput placeholder="비밀번호" />
        </TitledForm>
        <ButtonsWrapper>
          <Button invert>로그인</Button>
          OR
          <GoogleLogin
            style={{ border: "solid", borderRadius: "24px" }}
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="구글 아이디로 로그인"
            onSuccess={(response: GoogleLoginResponse) => {
              dispatch(login(response.tokenId));
            }}
            onFailure={(response) => {}}
            cookiePolicy={"single_host_origin"}
            redirectUri="/login"
            isSignedIn={isLoginUser}
          />
        </ButtonsWrapper>
      </LoginWrapper>
      {isLoginUser && <Redirect to={Path.HOME} />}
    </PageSection>
  );
}

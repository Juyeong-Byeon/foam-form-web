import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Path from "../../model/Path";
import React from "react";
import { StyledLink } from "../../components/StyledLink";
import User from "../../model/User";
import styled from "styled-components";

const HeaderRightWrapper = styled.div`
color:${({theme})=>theme.colors.primary}

`;

interface HeaderRightProps {
  user: User;
}
export default function HeaderRight({ user }: HeaderRightProps) {
  return (
    <HeaderRightWrapper>
      {User.isLoginUser(user) ? (
        user.name
      ) : (
        <>
          <Button>
            <StyledLink to={Path.LOGIN}>로그인 </StyledLink>
          </Button>
          <Button invert>회원 가입</Button>
        </>
      )}
    </HeaderRightWrapper>
  );
}

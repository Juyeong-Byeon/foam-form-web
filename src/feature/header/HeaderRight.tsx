import React, { ReactNode, useMemo } from "react";

import Button from "../../components/Button";
import Path from "../../shared/model/Path";
import User from "../../shared/model/User";
import styled from "styled-components";

const HeaderRightWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

interface HeaderRightProps {
  user: User;
  pathName: string;
  onClickLogin: () => void;
  onClickSignUp: () => void;
}
export default function HeaderRight({
  user,
  pathName,
  onClickLogin,
  onClickSignUp,
}: HeaderRightProps) {
  const getLeftButton = (path: string) => {
    switch (path) {
      case Path.LOGIN:
        return <Button onClick={onClickSignUp}>아직 계정이 없으신가요?</Button>;
      case Path.REGISTER:
        return <Button onClick={onClickLogin}>이미 회원이신가요?</Button>;
      default:
        return <Button onClick={onClickLogin}>로그인</Button>;
    }
  };

  return (
    <HeaderRightWrapper>
      {User.isLoginUser(user) ? user.username : <>{getLeftButton(pathName)}</>}
    </HeaderRightWrapper>
  );
}

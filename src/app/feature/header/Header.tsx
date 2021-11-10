import Button from "../../components/Button";
import HeaderRight from "./HeaderRight";
import React from "react";
import ServerPath from "../../model/ServerPath";
import User from "../../model/User";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 56px;
  padding: ${({ theme }) => theme.spacing.l};
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
`;

// 헤더는 항상 붙어 있고 뎁스가 깊지 않아서 드릴링 해줌.
interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  return (
    <StyledHeader>
      <img src={ServerPath.getFullPath(ServerPath.Logo)} alt="main logo" />
      <HeaderRight user={user} />
    </StyledHeader>
  );
}

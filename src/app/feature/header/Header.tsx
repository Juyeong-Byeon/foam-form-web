import { selectUser, useAppSelector } from "../../store/hooks";

import Button from "../../components/Button";
import HeaderRight from "./HeaderRight";
import Path from "../../model/Path";
import React from "react";
import ServerPath from "../../model/ServerPath";
import User from "../../model/User";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  height: 56px;
  padding: ${({ theme }) => theme.spacing.l};
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
`;

const ClickableImg = styled.img`
  cursor: pointer;
`;

export default function Header() {
  const { user } = useAppSelector(selectUser);
  const history = useHistory();

  const onClickLogo = () => {
    history.push(Path.HOME);
  };

  return (
    <StyledHeader>
      <ClickableImg
        onClick={onClickLogo}
        src={ServerPath.getFullPath(ServerPath.Logo)}
        alt="main logo"
      />
      <HeaderRight user={user} />
    </StyledHeader>
  );
}

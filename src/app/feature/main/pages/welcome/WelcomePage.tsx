import { selectUser, useAppSelector } from "../../../../store/hooks";

import Button from "../../../../components/Button";
import MessagePage from "../../../../components/MessagePage";
import Path from "../../../../model/Path";
import React from "react";
import ServerPath from "../../../../model/ServerPath";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StartButton = styled(Button)`
  margin: ${({ theme }) => theme.common.pixelToRem(35)};
`;

export default function WelcomePage() {
  const { user } = useAppSelector(selectUser);
  const history = useHistory();

  const onClickStart = () => {
    history.push(Path.EDITOR);
  };

  return (
    <MessagePage
      header={<img src={ServerPath.getFullPath(ServerPath.CharacterHappy)} />}
      title={`${user.name}님 폼폼에 오신걸 환영 합니다!`}
      subTitle="쉽고 빠르고 어쩌고 저쩌고 쉽고 빠르고 어쩌고 저쩌고"
      content={
        <StartButton onClick={onClickStart} className="start-button" invert>
          시작하기
        </StartButton>
      }
    />
  );
}

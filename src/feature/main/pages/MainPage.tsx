import React, { ReactElement } from "react";
import { selectUser, useAppSelector } from "../../../store/hooks";

import Button from "../../../components/Button";
import MessagePage from "../../../components/MessagePage";
import Path from "../../../model/Path";
import ServerPath from "../../../model/ServerPath";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StartButton = styled(Button)`
  margin: ${({ theme }) => theme.common.pixelToRem(35)};
`;

export default function MainPage(): ReactElement {
  const history = useHistory();

  const { user, isNewComer } = useAppSelector(selectUser);

  const onClickStart = () => {
    history.push(Path.EDITOR);
  };

  return (
    <MessagePage
      header={<img src={ServerPath.getFullPath(ServerPath.CharacterHappy)} />}
      title={
        user
          ? `${user.name}님 폼폼에 오신걸 환영 합니다!`
          : `구름처럼 몽골몽골한 폼 생성 서비스`
      }
      subTitle="쉽고 빠르고 어쩌고 저쩌고 쉽고 빠르고 어쩌고 저쩌고"
      content={
        <StartButton onClick={onClickStart} className="start-button" invert>
          지금 시작하기
        </StartButton>
      }
    />
  );
}

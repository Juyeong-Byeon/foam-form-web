import React, { ReactElement } from "react";

import Button from "../../../components/Button";
import MessagePage from "../../../components/MessagePage";
import Path from "../../../model/Path";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StartButton = styled(Button)`
  margin: ${({ theme }) => theme.common.pixelToRem(35)};
`;

export default function MainPage(): ReactElement {
  const history = useHistory();

  const onClickStart = () => {
    history.push(Path.EDITOR);
  };

  return (
    <MessagePage
      title="구름처럼 가볍고 몽글몽글한 폼"
      subTitle="쉽고 빠르고 어쩌고 저쩌고 쉽고 빠르고 어쩌고 저쩌고"
      content={
        <StartButton onClick={onClickStart} className="start-button" invert>
          지금 시작하기
        </StartButton>
      }
    />
  );
}
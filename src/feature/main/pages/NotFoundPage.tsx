import Button from "../../../components/Button";
import MessagePage from "../../../components/MessagePage";
import Path from "../../../model/Path";
import React from "react";
import ServerPath from "../../../model/ServerPath";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const GoHomeButton = styled(Button)`
  margin: ${({ theme }) => theme.common.pixelToRem(35)};
`;

export default function NotFoundPage() {
  const history = useHistory();

  const onClickGoHome = () => {
    history.push(Path.HOME);
  };

  return (
    <MessagePage
      header={<img src={ServerPath.getFullPath(ServerPath.CharacterSad)} />}
      title="앗, 페이지를 찾을 수 없어요."
      subTitle="쉽고 빠르고 어쩌고 저쩌고 쉽고 빠르고 어쩌고 저쩌고"
      content={
        <GoHomeButton onClick={onClickGoHome} className="start-button" invert>
          홈으로
        </GoHomeButton>
      }
    />
  );
}

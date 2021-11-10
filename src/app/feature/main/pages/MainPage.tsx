import React, { ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";

import Button from "../../../components/Button";
import PageSection from "../../../components/PageSection";
import styled from "styled-components";

const ContentWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  .main-title {
    margin: ${({ theme }) => theme.common.pixelToRem(10)};
    font-weight: 300;
  }
  .sub-title {
    margin: ${({ theme }) => theme.common.pixelToRem(5)};
    font-weight: 500;
    letter-spacing: 0.15px;
  }
  .start-button {
    margin: ${({ theme }) => theme.common.pixelToRem(35)};
  }
`;

export default function MainPage(): ReactElement {
  return (
    <PageSection>
      <ContentWrapper>
        <h1 className="main-title">구름처럼 가볍고 몽글몽글한 폼</h1>
        <h3 className="sub-title">
          쉽고 빠르고 어쩌고 저쩌고 쉽고 빠르고 어쩌고 저쩌고
        </h3>
        <Button className="start-button" invert>
          지금 시작하기
        </Button>
      </ContentWrapper>
    </PageSection>
  );
}

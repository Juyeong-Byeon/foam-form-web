import React, { ReactNode } from "react";

import Button from "./Button";
import PageSection from "./PageSection";
import styled from "styled-components";

const ContentWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  .header-wrapper {
    margin: ${({ theme }) => theme.common.pixelToRem(30)};
  }

  .main-title {
    margin: ${({ theme }) => theme.common.pixelToRem(10)};
    font-weight: 300;
  }
  .sub-title {
    margin: ${({ theme }) => theme.common.pixelToRem(5)};
    font-weight: 500;
    letter-spacing: 0.15px;
  }
`;

interface MessagePageProps {
  header?: ReactNode;
  title: string;
  subTitle: string;
  content: ReactNode;
}

export default function MessagePage({
  header,
  title,
  subTitle,
  content,
}: MessagePageProps) {
  return (
    <PageSection>
      <ContentWrapper>
        <div className="header-wrapper">{header}</div>
        <h1 className="main-title">{title}</h1>
        <h3 className="sub-title">{subTitle}</h3>
        {content}
      </ContentWrapper>
    </PageSection>
  );
}

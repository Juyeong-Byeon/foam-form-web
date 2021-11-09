import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 56px;
  padding-top: 40px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

export default function Header() {
  return <StyledHeader>button</StyledHeader>;
}

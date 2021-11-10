import styled from "styled-components";

const PageSection = styled.section`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export default PageSection;

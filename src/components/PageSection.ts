import styled from "styled-components";
import { withErrorBoundaryView } from "../hoc/withFallbackView";

const PageSection = styled.section`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export default withErrorBoundaryView(PageSection);

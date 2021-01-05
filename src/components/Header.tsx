import { ReactNode } from "react";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  leftContent: ReactNode;
  rightContent: ReactNode;
};
export const Header = ({ leftContent, rightContent }: Props) => (
  <Wrapper>
    <div>{leftContent}</div>
    <div>{rightContent}</div>
  </Wrapper>
);

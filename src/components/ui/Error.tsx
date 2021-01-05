import styled from "@emotion/styled";

type ErrorProps = {
  isError: boolean;
};

export const Error = styled.div<ErrorProps>`
  color: red;
  margin-top: 0.5rem;
  height: 1.5rem;
  font-size: 0.875rem;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  visibility: ${(props) => (props.isError ? "visible" : "hidden")};
  transition: all 0.2s;
`;

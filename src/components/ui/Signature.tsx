import SignatureCanvas from "react-signature-canvas";
import styled from "@emotion/styled";
import { Button, FormLabel } from "@chakra-ui/react";
import { forwardRef } from "react";
import { RequiredAsterisk } from "./RequiredAsterisk";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

type SignatureWrapperProps = {
  error: boolean;
};

const SignatureWrapper = styled.div<SignatureWrapperProps>`
  border-radius: ${(props) => props.theme.radii.md};
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red[500] : props.theme.colors.gray[200]};
  ${(props) =>
    !!props.error && `box-shadow: 0 0 0 1px ${props.theme.colors.red[500]}`};
  background-color: #dbdbdb;
  width: 624px;
  height: 200px;
  transition: all 0.2s;
`;

type Props = {
  error: boolean;
  clearSigPad: () => any;
};

export const Signature = forwardRef<any, Props>(
  ({ clearSigPad, error }, ref) => {
    return (
      <Wrapper>
        <FormLabel>
          Client Signature
          <RequiredAsterisk />
        </FormLabel>
        <SignatureWrapper error={error}>
          <SignatureCanvas
            ref={ref}
            penColor="black"
            canvasProps={{ width: 624, height: 200, className: "sigCanvas" }}
          />
        </SignatureWrapper>
        <Button mt="1rem" colorScheme="red" height="2rem" onClick={clearSigPad}>
          Clear Signature
        </Button>
      </Wrapper>
    );
  }
);

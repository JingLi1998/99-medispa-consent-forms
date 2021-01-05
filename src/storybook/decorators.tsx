import styled from "@emotion/styled";

const FormWrapper = styled.div`
  max-width: 624px;
`;

export const withFormLayout = (Story: any) => (
  <FormWrapper>
    <Story />
  </FormWrapper>
);

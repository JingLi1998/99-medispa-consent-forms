import { Textarea } from "@chakra-ui/react";
import { forwardRef } from "react";
import { FormControlAndLabel } from "./FormControlAndLabel";

type Props = {
  isRequired?: boolean;
  label: string;
  name: string;
  readOnly?: boolean;
  value?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ isRequired = true, label, name, readOnly, value }, ref) => (
    <FormControlAndLabel isRequired={isRequired} label={label}>
      <Textarea
        focusBorderColor="brand.500"
        name={name}
        ref={ref}
        resize="none"
        readOnly={readOnly}
        value={value}
      />
    </FormControlAndLabel>
  )
);

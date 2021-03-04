import { Input } from "@chakra-ui/react";
import { FormControlAndLabel } from "./FormControlAndLabel";
import { forwardRef } from "react";

type Props = {
  isRequired?: boolean;
  label: string;
  name: string;
  type?: string;
  readOnly?: boolean;
  value?: string;
};

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ isRequired, label, name, type = "text", readOnly, value }, ref) => (
    <FormControlAndLabel isRequired={isRequired} label={label}>
      <Input
        focusBorderColor="brand.500"
        name={name}
        ref={ref}
        type={type}
        readOnly={readOnly}
        value={value}
      />
    </FormControlAndLabel>
  )
);

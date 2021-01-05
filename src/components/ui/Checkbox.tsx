import { Checkbox as CheckboxInput } from "@chakra-ui/react";
import { forwardRef } from "react";
import { RequiredAsterisk } from "./RequiredAsterisk";

type Props = {
  isRequired?: boolean;
  label: string;
  name: string;
  isChecked?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ isRequired, label, name, isChecked }, ref) => (
    <CheckboxInput
      mt="1rem"
      colorScheme="brand"
      name={name}
      ref={ref}
      isRequired={isRequired}
      isChecked={isChecked}
    >
      {label}
      {isRequired && <RequiredAsterisk />}
    </CheckboxInput>
  )
);

import { ReactNode } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

type Props = {
  isRequired?: boolean;
  label: string;
  children: ReactNode;
};

export const FormControlAndLabel = ({ children, isRequired, label }: Props) => (
  <FormControl mt="1rem" isRequired={isRequired}>
    <FormLabel>{label}</FormLabel>
    {children}
  </FormControl>
);

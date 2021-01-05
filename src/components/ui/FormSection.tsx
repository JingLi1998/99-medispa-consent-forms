import { FormLabel } from "@chakra-ui/react";
import { forwardRef } from "react";
import { FormField } from "./FormField";

type Props = {
  formFields: any[];
  label: string;
  readOnly?: boolean;
  data?: any;
};

export const FormSection = forwardRef<any, Props>(
  ({ data, formFields, label, readOnly }, ref) => (
    <>
      <FormLabel>{label}</FormLabel>
      {formFields.map((formField: any, index) => (
        <FormField
          formField={formField}
          key={index}
          ref={ref}
          readOnly={readOnly}
          value={data ? data[formField.name] : undefined}
        />
      ))}
    </>
  )
);

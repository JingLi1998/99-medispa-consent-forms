import { forwardRef } from "react";
import { Checkbox } from "./Checkbox";
import { FormField as FormFieldType } from "../../types";
import { List } from "./List";
import { TextArea } from "./TextArea";
import { TextField } from "./TextField";

type Props = {
  formField: FormFieldType;
  readOnly?: boolean;
  value?: string;
};

export const FormField = forwardRef<any, Props>(
  ({ formField, readOnly, value }, ref) => {
    switch (formField.type) {
      case "text":
      case "email":
        return (
          <TextField
            name={formField.name}
            label={formField.label}
            ref={ref}
            type={formField.type}
            readOnly={readOnly}
            value={value}
          />
        );
      case "checkbox":
        return (
          <div>
            <Checkbox
              name={formField.name}
              label={formField.label}
              ref={ref}
              isChecked={value === undefined ? undefined : !!value}
            />
          </div>
        );
      case "textarea":
        return (
          <TextArea
            name={formField.name}
            label={formField.label}
            ref={ref}
            readOnly={readOnly}
            value={value}
          />
        );
      case "list":
        return <List label={formField.label} listItems={formField.listItems} />;
      default:
        throw Error(
          "No form field type found when trying to create form field component."
        );
    }
  }
);

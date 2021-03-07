type FormFieldShared = {
  label: string;
};

type FormFieldInput = FormFieldShared & {
  name: string;
  type: "text" | "email" | "textarea" | "checkbox";
  isRequired?: boolean;
};

type FormFieldList = FormFieldShared & {
  listItems: string[];
  type: "list";
};

export type FormField = FormFieldInput | FormFieldList;

export type Section = {
  label?: string;
  fields: FormField[];
}
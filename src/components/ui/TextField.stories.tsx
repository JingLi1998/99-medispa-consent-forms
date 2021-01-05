import { TextField } from "./TextField";
import { Meta } from "@storybook/react/types-6-0";
import { withFormLayout } from "../../storybook/decorators";

export default {
  component: TextField,
  title: "TextField",
  decorators: [withFormLayout],
} as Meta;

export const Default = () => <TextField name="text-field" label="Text Field" />;

import { TextArea } from "./TextArea";
import { Meta } from "@storybook/react/types-6-0";
import { withFormLayout } from "../../storybook/decorators";

export default {
  component: TextArea,
  title: "TextArea",
  decorators: [withFormLayout],
} as Meta;

export const Default = () => <TextArea name="text-area" label="Text Area" />;

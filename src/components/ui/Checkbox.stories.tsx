import { Checkbox } from "./Checkbox";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Checkbox,
  title: "Checkbox",
} as Meta;

export const Default = () => <Checkbox name="checkbox" label="Checkbox" />;

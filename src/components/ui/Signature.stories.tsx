import { useState, useRef } from "react";
import { Signature } from "./Signature";
import { Meta } from "@storybook/react/types-6-0";

export default {
  component: Signature,
  title: "Signature",
} as Meta;

export const Default = () => {
  const sigPadRef = useRef<any | null>(null);
  const sigPadError = useState(false)[0];

  return (
    <Signature
      ref={sigPadRef}
      error={sigPadError}
      clearSigPad={() => sigPadRef.current.clear()}
    />
  );
};

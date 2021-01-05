import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { Signature } from "./ui/Signature";
import { useHistory } from "react-router-dom";
import { firestore } from "../firebase/firebase";
import { Button, FormLabel } from "@chakra-ui/react";
import { Error } from "./ui/Error";
import { FormSection } from "./ui/FormSection";
import format from "date-fns/format";
import { Header } from "./Header";

const FormWrapper = styled.form`
  width: 624px;
`;

const Heading = styled.h1`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

type Props = {
  formFieldsArray: any;
  heading: string;
  formName: string;
};

export const Form = ({ formFieldsArray, heading, formName }: Props) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const sigPadRef = useRef<any>(null);
  const [sigPadError, setSigPadError] = useState(false);
  const [today] = useState(new Date());

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const isSigPadEmpty = sigPadRef.current.isEmpty();
    if (isSigPadEmpty) {
      setSigPadError(true);
    } else {
      setSigPadError(false);
      handleSubmit(submitHandler)();
    }
  };

  const submitHandler = async (data: any) => {
    const name = data.name.split(" ").join("-");
    const date = format(today, "yyyy-MM-dd");
    const timestamp = Date.now();
    const id = `${timestamp}-${date}-${name}`;
    await firestore
      .collection(formName)
      .doc(id)
      .set({
        ...data,
        date,
        timestamp,
        signature: sigPadRef.current.toDataURL(),
      })
      .then(() => {
        history.goBack();
      })
      //  TODO - ADD POPUP WHEN ERROR OCCURS
      .catch((error) => console.log(error));
  };

  return (
    <FormWrapper onSubmit={(e) => onSubmit(e)}>
      <Header
        leftContent={<Heading>{heading}</Heading>}
        rightContent={
          <Button size="sm" colorScheme="red" onClick={() => history.goBack()}>
            Go Back
          </Button>
        }
      />
      <FormLabel>Today's Date: {format(today, "dd/MM/yyyy")}</FormLabel>
      {formFieldsArray.map((section: any, index: number) => (
        <FormSection
          formFields={section.sectionFields}
          label={section.label}
          key={index}
          ref={register()}
        />
      ))}
      <Signature
        ref={sigPadRef}
        error={sigPadError}
        clearSigPad={() => sigPadRef.current.clear()}
      />
      <Error isError={sigPadError}>Please fill out your signature</Error>
      <Button type="submit" mt="0.5rem" colorScheme="brand" width="full">
        Submit Form
      </Button>
    </FormWrapper>
  );
};

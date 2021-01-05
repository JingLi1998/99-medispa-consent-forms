import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../firebase/firebase";
import styled from "@emotion/styled";
import { Button, FormLabel } from "@chakra-ui/react";
import { Spinner } from "./ui/Spinner";
import { FormSection } from "./ui/FormSection";
import { Header } from "./Header";

const FormWrapper = styled.form`
  width: 624px;
`;

const Heading = styled.h1`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ImageWrapper = styled.div`
  background-color: #dbdbdb;
  width: 600px;
  height: 200px;
  padding-top: 0.75rem;
`;

type Props = {
  collection: string;
  formFieldsArray: any[];
  heading: string;
};

export const CompletedForm = ({
  collection,
  formFieldsArray,
  heading,
}: Props) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any | null>(null);
  const history = useHistory();

  useEffect(() => {
    firestore
      .collection(collection)
      .doc(id)
      .get()
      .then((doc: any) => {
        if (doc.exists) setData(doc.data());
      })
      .catch((error) => {
        console.log("caught error", error);
      });
  }, [id, collection, setData]);

  return (
    <FormWrapper>
      {data ? (
        <>
          <Header
            leftContent={<Heading>{heading}</Heading>}
            rightContent={
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => history.goBack()}
              >
                Go Back
              </Button>
            }
          />
          {/* <Button variant="danger" onClick={() => history.goBack()}>
            Go Back
          </Button> */}
          <FormLabel>Today's Date: {data.date.replaceAll("-", "/")}</FormLabel>
          {formFieldsArray.map((section: any, index) => (
            <FormSection
              formFields={section.sectionFields}
              label={section.label}
              key={index}
              readOnly
              data={data}
            />
          ))}
          <FormLabel mt="1rem">Client Signature</FormLabel>
          <ImageWrapper>
            <img src={data.signature} width="500" alt="signature" />
          </ImageWrapper>
        </>
      ) : (
        <Spinner />
      )}
    </FormWrapper>
  );
};

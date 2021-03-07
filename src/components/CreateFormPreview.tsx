import { Header } from "./Header";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormStore } from "../store";

const Heading = styled.h1`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CreateFormPreview = () => {
  const form = useFormStore((state) => state.form);
  return (
    <>
      <Header
        leftContent={<Heading>Create Form Preview</Heading>}
        rightContent={
          <Link to="/create-form">
            <Button size="sm">Edit</Button>
          </Link>
        }
      />
      {JSON.stringify(form)}
    </>
  );
};

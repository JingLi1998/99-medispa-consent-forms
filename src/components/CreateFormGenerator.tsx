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

export const CreateFormGenerator = () => {
  const { renameForm, addSection, addFormField } = useFormStore((state) => ({
    renameForm: state.renameForm,
    addSection: state.addSection,
    addFormField: state.addFormField,
  }));
  return (
    <>
      <Header
        leftContent={<Heading>Create Form Generator</Heading>}
        rightContent={
          <Link to={`create-form/preview`}>
            <Button size="sm">Preview</Button>
          </Link>
        }
      />
      <div>
        <button onClick={() => renameForm("Renamed")}>Rename</button>
        <button onClick={() => addSection("Section 1")}>Add Section</button>
        <button
          onClick={() =>
            addFormField(
              {
                label: "Field 1",
                name: "Field Name",
                type: "text",
                isRequired: true,
              },
              0
            )
          }
        >
          Add Form Field
        </button>
      </div>
    </>
  );
};

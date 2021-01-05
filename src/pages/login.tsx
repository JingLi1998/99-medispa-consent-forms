import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Form = styled.form`
  width: 16rem;
  height: 400px;
  padding-top: 1.5rem;
  margin: auto;
`;

export const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const email = "99medispa.sydney@gmail.com";
    const { password } = data;
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error);
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          focusBorderColor="brand"
          name="password"
          label="Password"
          type="password"
          ref={register({ required: true })}
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="brand"
        // background="brand"
        mt="1rem"
        color="white"
        isFullWidth
      >
        Login
      </Button>
    </Form>
  );
};

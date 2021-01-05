import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { routes } from "../routes";

export const Home = () => (
  <>
    {routes.map((route) => (
      <Link to={route.to} key={route.to}>
        <Button my="0.5rem" isFullWidth colorScheme="brand">
          {route.label + " Form"}
        </Button>
      </Link>
    ))}
  </>
);

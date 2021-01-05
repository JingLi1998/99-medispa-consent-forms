import styled from "@emotion/styled";
import { NavLink } from "./NavLink";
import { Link } from "@chakra-ui/react";
import { auth } from "../firebase/firebase";

const Wrapper = styled.nav`
  height: 3rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

type Props = {
  isLoggedIn: boolean;
  onLogout: () => void;
};

export const Navbar = ({ isLoggedIn, onLogout }: Props) => {
  const logout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    auth.signOut();
    onLogout();
  };

  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <NavLink to="/">Home</NavLink>
          <Link color="brand" onClick={logout} mx={3}>
            Logout
          </Link>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </Wrapper>
  );
};

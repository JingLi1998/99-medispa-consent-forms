import styled from "@emotion/styled";
import { NavLink, NavLinkButton } from "./NavLink";
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
  const logout = () => {
    auth.signOut();
    onLogout();
  };

  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink exact={false} to="/create-form">
            Create Form
          </NavLink>
          <NavLinkButton onClick={logout}>Logout</NavLinkButton>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </Wrapper>
  );
};

import { NavLink as NavigationLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
// const Link = styled(NavLink)`
//   color: ${(props) => props.theme.colors.};
//   font-size: 1rem;
//   height: 100%;
//   font-weight: 600;
//   padding: 0 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   &.active {
//     color: white;
//     background: ${(props) => props.theme.primary};
//   }
//   &:hover {
//     color: white;
//     background: ${(props) => props.theme.primary};
//   }
// `;

// const Button = styled.button`
//   font-size: 1rem;
//   color: ${(props) => props.theme.colors.brand};
//   background: white;
//   border: 0;
//   height: 100%;
//   font-weight: 600;
//   padding: 0 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     color: white;
//     background: ${(props) => props.theme.colors.brand};
//   }
// `;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  &.active {
    color: white;
    background: ${(props) => props.theme.colors.brand[500]};
  }
`;

type Props = {
  to: string;
  children: ReactNode;
};

export const NavLink = ({ children, to }: Props) => (
  <StyledLink
    as={NavigationLink}
    color="brand"
    exact
    h="full"
    to={to}
    my="auto"
    px={3}
  >
    {children}
  </StyledLink>
);

import { NavLink as NavigationLink } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";
import { theme } from "../theme";

const linkStyles = (props: typeof theme) => css`
  height: 100%;
  margin: auto 0;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  color: ${props.theme.colors.brand[500]};
  &:hover {
    color: white;
    background: ${props.theme.colors.brand[500]};
  }
`;

const StyledLink = styled(NavigationLink)`
  ${linkStyles}
  &.active {
    color: white;
    background: ${(props) => props.theme.colors.brand[500]};
  }
`;

const StyledLinkButton = styled.div`
  ${linkStyles}
  cursor: pointer;
`;

type LinkProps = {
  to: string;
  children: ReactNode;
  exact?: boolean;
};

export const NavLink = ({ children, exact = true, to }: LinkProps) => (
  <StyledLink exact={exact} to={to}>
    {children}
  </StyledLink>
);

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const NavLinkButton = ({ children, onClick }: ButtonProps) => (
  <StyledLinkButton onClick={onClick}>{children}</StyledLinkButton>
);

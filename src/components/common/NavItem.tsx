import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledLI = styled.li`
  border-radius: 5px;
  box-shadow: var(--shadow-elevation-low);
  &:hover {
    box-shadow: var(--shadow-elevation-medium);
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: cornsilk;
  padding: 1rem;
  border-radius: inherit;
  &:active {
    filter: brightness(90%);
  }
`;

interface NavItemProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
}

const NavItem: React.FC<
  NavItemProps & NavLinkProps & React.HTMLAttributes<HTMLLIElement>
> = ({ children, className, style, linkStyle, to }) => {
  return (
    <StyledLI className={className} style={{ ...style }}>
      <StyledNavLink to={to} style={{ ...linkStyle }}>
        {children}
      </StyledNavLink>
    </StyledLI>
  );
};

export default NavItem;

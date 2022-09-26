import styled from "styled-components";

const StyledLI = styled.li`
  padding: 1rem;
  background-color: cornsilk;
  border-radius: 5px;
  box-shadow: var(--shadow-elevation-low);
  &:hover {
    box-shadow: var(--shadow-elevation-medium);
  }
`;

// TODO: maybe do intersection type with all 3 types
interface NavItemProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
}

const NavItem: React.FC<NavItemProps & React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  style,
}) => {
  return (
    <StyledLI className={className} style={{ ...style }}>
      {children}
    </StyledLI>
  );
};

export default NavItem;

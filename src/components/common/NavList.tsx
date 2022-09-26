import styled from "styled-components";

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 8px;
`;

// TODO: maybe do intersection type with all 3 types
interface NavListProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
}

const NavList: React.FC<
  NavListProps & React.HTMLAttributes<HTMLUListElement>
> = ({ children, className, style }) => {
  return (
    <StyledUL className={className} style={{ ...style }}>
      {children}
    </StyledUL>
  );
};

export default NavList;

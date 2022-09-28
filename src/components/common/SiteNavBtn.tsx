import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledLI = styled.li`
  border-radius: 5px;
  box-shadow: var(--shadow-elevation-low);
  &:hover {
    box-shadow: var(--shadow-elevation-medium);
  }
`;

const StyledNavBtn = styled.button`
  display: inline-block;
  text-align: left;
  width: 100%;
  height: 100%;
  background-color: cornsilk;
  padding: 1rem;
  border: none;
  border-radius: inherit;
  &:active {
    filter: brightness(90%);
  }
`;

interface SiteNavBtnProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
  btnStyle?: React.CSSProperties;
  handleClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SiteNavBtn: React.FC<
  SiteNavBtnProps & React.HTMLAttributes<HTMLLIElement>
> = ({ children, className, style, btnStyle, handleClick }) => {
  return (
    <StyledLI className={className} style={{ ...style }}>
      <StyledNavBtn onClick={handleClick} style={{ ...btnStyle }}>
        {children}
      </StyledNavBtn>
    </StyledLI>
  );
};

export default SiteNavBtn;

import React from "react";
import styled from "styled-components";

const CardContainer = styled.span`
  display: inline-block;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: var(--shadow-elevation-high);
`;

// TODO: maybe do intersection type with all 3 types
interface CardProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  style,
}) => {
  return (
    <CardContainer className={className} style={{ ...style }}>
      {children}
    </CardContainer>
  );
};

export default Card;

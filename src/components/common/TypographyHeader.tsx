import styled from "styled-components";

const LargeHeader = styled.h1`
  font-size: var(--text-large-xx);
  @media (max-width: 550px) {
    font-size: var(--text-large-x);
  }
`;

const MediumHeader = styled.h2`
  font-size: var(--text-large-x);
  @media (max-width: 550px) {
    font-size: var(--text-large);
  }
`;

const SmallHeader = styled.h3`
  font-size: var(--text-large);
  @media (max-width: 550px) {
    font-size: var(--text-medium);
  }
`;

// TODO: maybe do intersection type with all 3 types
interface TypographyHeaderProps extends React.PropsWithChildren {
  variant?: "large" | "medium" | "small";
  style?: React.CSSProperties;
}

const TypographyHeader: React.FC<
  TypographyHeaderProps & React.HTMLAttributes<HTMLSpanElement>
> = ({ children, className, style, variant = "large" }) => {
  return (
    <>
      {variant === "large" ? (
        <LargeHeader className={className} style={{ ...style }}>
          {children}
        </LargeHeader>
      ) : variant === "medium" ? (
        <MediumHeader className={className} style={{ ...style }}>
          {children}
        </MediumHeader>
      ) : (
        <SmallHeader className={className} style={{ ...style }}>
          {children}
        </SmallHeader>
      )}
    </>
  );
};

export default TypographyHeader;

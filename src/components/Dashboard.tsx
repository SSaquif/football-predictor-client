import TypographyHeader from "./common/TypographyHeader";

const DashBoard: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <TypographyHeader>User DashBoard</TypographyHeader>
      <TypographyHeader variant="medium">User DashBoard</TypographyHeader>
      <TypographyHeader variant="small">User DashBoard</TypographyHeader>
      <>Hello</>
    </>
  );
};

export default DashBoard;

import HeaderTypography from "./common/HeaderTypography";

const DashBoard: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <HeaderTypography>User DashBoard</HeaderTypography>
      <HeaderTypography variant="medium">User DashBoard</HeaderTypography>
      <HeaderTypography variant="small">User DashBoard</HeaderTypography>
      <>Hello</>
    </>
  );
};

export default DashBoard;

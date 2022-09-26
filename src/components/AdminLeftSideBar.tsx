import NavItem from "./common/NavItem";
import NavList from "./common/NavList";

const AdminLeftSidebar: React.FC = () => {
  return (
    <NavList>
      <NavItem to={"/"}>Home</NavItem>
      <NavItem to={"/tournaments"}>Tournaments</NavItem>
    </NavList>
  );
};

export default AdminLeftSidebar;

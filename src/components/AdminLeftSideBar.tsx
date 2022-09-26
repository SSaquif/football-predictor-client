import { NavLink } from "react-router-dom";
import NavItem from "./common/NavItem";
import NavList from "./common/NavList";

const AdminLeftSidebar: React.FC = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to={"/"}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={"/tournaments"}>Tournaments</NavLink>
      </NavItem>
    </NavList>
  );
};

export default AdminLeftSidebar;

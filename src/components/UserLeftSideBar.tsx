import { NavLink } from "react-router-dom";
import NavItem from "./common/NavItem";
import NavList from "./common/NavList";

const UserLeftSideBar: React.FC<React.PropsWithChildren> = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to={"/"}>Create a League</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={"/"}>Leagues</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={"/"}>Rules</NavLink>
      </NavItem>
    </NavList>
  );
};

export default UserLeftSideBar;

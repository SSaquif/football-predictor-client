import { NavLink } from "react-router-dom";
import NavItem from "./common/NavItem";
import NavList from "./common/NavList";

const UserLeftSideBar: React.FC<React.PropsWithChildren> = () => {
  return (
    <NavList>
      <NavItem to={"/"}>Create a League</NavItem>
      <NavItem to={"/"}>Leagues</NavItem>
      <NavItem to={"/"}>Rules</NavItem>
    </NavList>
  );
};

export default UserLeftSideBar;

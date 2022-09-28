import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavItem from "./common/NavItem";
import NavList from "./common/NavList";

const SiteNavbar: React.FC = () => {
  const { userSummaries } = useContext(AuthContext);
  return (
    <div>
      <NavList>
        <NavItem to={"/"}>Home</NavItem>
        {/* Should be Btn that causes transition*/}
        {userSummaries?.isAdmin && (
          <NavItem to={"/comp-controls"}>Competitions Controls</NavItem>
        )}
        <NavItem to={"/competitions"}>Competitions</NavItem>
        {/* Should be Btn that causes transition*/}
        <NavItem to={"/create-league"}>Create a League</NavItem>
        {/* Should be Btn that causes transition*/}
        <NavItem to={"/user-leagues"}>Your Leagues</NavItem>
        <NavItem to={"/rules"}>Rules</NavItem>
      </NavList>
    </div>
  );
};

export default SiteNavbar;

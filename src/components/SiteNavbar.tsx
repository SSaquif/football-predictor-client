import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SiteNavLink from "./common/SiteNavLink";
import SiteNavBtn from "./common/SiteNavBtn";
import NavList from "./common/NavList";

const SiteNavbar: React.FC = () => {
  const { userSummaries } = useContext(AuthContext);
  return (
    <div>
      <NavList>
        <SiteNavLink to={"/"}>Home</SiteNavLink>
        {userSummaries?.isAdmin && (
          <SiteNavBtn>Competitions Controls</SiteNavBtn>
        )}
        <SiteNavBtn>Competitions</SiteNavBtn>
        <SiteNavLink to={"/create-league"}>Create a League</SiteNavLink>
        <SiteNavBtn>Your Leagues</SiteNavBtn>
        {/* Rules Should be a link that also causes transition */}
        <SiteNavLink to={"/rules"}>Rules</SiteNavLink>
      </NavList>
    </div>
  );
};

export default SiteNavbar;

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import SiteNavLink from "./common/SiteNavLink";
import SiteNavBtn from "./common/SiteNavBtn";
import NavList from "./common/NavList";
type NavType =
  | "main"
  | "admin-controls"
  | "competitions"
  | "create-league"
  | "rules";

const SiteNavbar: React.FC = () => {
  const { userSummary } = useContext(AuthContext);
  // Make this prop+lift state up OR use some context
  // OR use url param? (Param makes most sense, but need decide sensible endpoints)
  const [navType, setNavType] = useState<NavType>("main");

  switch (navType) {
    case "main":
      return (
        <div>
          <NavList>
            <SiteNavLink to={"/"}>Home</SiteNavLink>
            {userSummary?.isAdmin && (
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
    case "admin-controls":
      return <>Navbar with comp list + isAdmin= true</>;
    case "competitions":
      return (
        <>Navbar with comp list + possibly user id (just use Auth context)</>
      );
    case "create-league":
      return <>Not sure, but the default list again?</>;
    case "rules":
      return <>Not sure, but the default list again?</>;
    default:
      return null;
  }
};

export default SiteNavbar;

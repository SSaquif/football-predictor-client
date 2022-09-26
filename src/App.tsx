import { useContext } from "react";
import styled from "styled-components";
import { AuthContext, SignOutButton } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import UserLeftSideBar from "./components/UserLeftSideBar";
import AdminLeftSidebar from "./components/AdminLeftSideBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.header`
  border: 1px solid yellow;
  height: var(--header-height);
`;
const MainContentContainer = styled.div`
  border: 1px solid greenyellow;
  flex: 1;
  display: flex;
`;

const LeftSidebar = styled.aside`
  border: 1px solid lime;
  flex: 1;
`;
const Main = styled.main`
  border: 1px solid blue;
  flex: 3;
`;
const RightSidebar = styled.aside`
  border: 1px solid hotpink;
  flex: 1;
`;
const Footer = styled.footer`
  border: 1px solid red;
  height: var(--footer-height);
`;

function App() {
  const { userAuth, userSummaries } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {userAuth ? (
        <Container>
          <Header>{userAuth ? <SignOutButton /> : "Please sign in"}</Header>
          <MainContentContainer>
            <LeftSidebar>
              {userSummaries?.isAdmin ? (
                <AdminLeftSidebar />
              ) : (
                <UserLeftSideBar />
              )}
            </LeftSidebar>
            <Main>
              <Routes>
                {userSummaries?.isAdmin ? (
                  <Route path="/" element={<AdminDashboard />} />
                ) : (
                  <Route path="/" element={<Dashboard />} />
                )}
              </Routes>
            </Main>
            <RightSidebar>Right Sidebar</RightSidebar>
          </MainContentContainer>
          <Footer>
            <Toaster />
          </Footer>
        </Container>
      ) : (
        <LoginPage />
      )}
    </BrowserRouter>
  );
}

export default App;

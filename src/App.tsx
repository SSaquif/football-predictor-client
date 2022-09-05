import { useContext } from "react";
import styled from "styled-components";
import { AuthContext, SignOutButton } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

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
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {user ? (
        <Container>
          <Header>{user ? <SignOutButton /> : "Please sign in"}</Header>
          <MainContentContainer>
            <LeftSidebar>Left Sidebar</LeftSidebar>
            <Main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
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

import { useContext } from "react";
import styled from "styled-components";
import { AuthContext, SignOutButton } from "./context/AuthContext";
import LoginPrompt from "./components/LoginPrompt";
import { Toaster } from "react-hot-toast";

const Container = styled.div`
  /* border: 1rem solid cornflowerblue; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.header`
  border: 1px solid yellow;
  /* TODO: replace with css variable */
  height: 80px;
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
  height: 150px;
`;

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Header>{user ? <SignOutButton /> : "Please sign in"}</Header>
      <MainContentContainer>
        <LeftSidebar>Left Sidebar</LeftSidebar>
        <Main>{user ? "Main" : <LoginPrompt />}</Main>
        <RightSidebar>Right Sidebar</RightSidebar>
      </MainContentContainer>
      <Footer>
        <Toaster />
      </Footer>
    </Container>
  );
}

export default App;

import styled from "styled-components";

const Container = styled.div`
  /* border: 1rem solid cornflowerblue; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.header`
  border: 1px solid yellow;
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
  return (
    <Container>
      <Header>Header</Header>
      <MainContentContainer>
        <LeftSidebar>Left Sidebar</LeftSidebar>
        <Main>Main</Main>
        <RightSidebar>Right Sidebar</RightSidebar>
      </MainContentContainer>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;

import Card from "./common/Card";
import { SignInButton } from "../context/AuthContext";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: whitesmoke;
`;

const LoginPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <LoginCard>
        <SignInButton />
      </LoginCard>
    </Container>
  );
};

export default LoginPage;

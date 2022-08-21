import Card from "./common/Card";
import { SignInButton } from "../context/AuthContext";
import styled from "styled-components";

const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: whitesmoke;
`;

const LoginPrompt: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <LoginCard>
      <p>Please Login</p>
      <SignInButton />
    </LoginCard>
  );
};

export default LoginPrompt;

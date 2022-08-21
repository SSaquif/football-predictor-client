import React from "react";
import { SignInButton } from "../context/AuthContext";

const LoginPrompt: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <p>Please Login</p>
      <SignInButton />
    </div>
  );
};

export default LoginPrompt;

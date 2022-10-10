import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SeasonSeedingForm: React.FC<React.PropsWithChildren> = () => {
  const { userSummary } = useContext(AuthContext);

  if (userSummary?.isAdmin) return null;

  return <></>;
};

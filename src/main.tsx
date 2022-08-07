import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PredictionTable from "./components/PredictionTable";
import { EPL_TEAMS_2022_2023 } from "./data";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PredictionTable isEditing teams={EPL_TEAMS_2022_2023} />
  </React.StrictMode>
);

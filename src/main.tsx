import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import GlobalStyle from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      {/* <App /> */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

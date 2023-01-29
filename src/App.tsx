import React from "react";
import GlobalStyle from "../src/styles/GlobalStyles";
import Dashbord from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <Dashbord />
      <GlobalStyle />
    </>
  );
};

export default App;

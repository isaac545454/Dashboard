import React from "react";
import GlobalStyle from "../src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Dark from "./styles/themes/dark";
import Light from "./styles/themes/Light";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Dark}>
      <Layout />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

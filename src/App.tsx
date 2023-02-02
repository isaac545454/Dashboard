import React from "react";

import { ThemeProvider } from "styled-components";
import Dark from "./styles/themes/dark";
import Light from "./styles/themes/Light";
import Routes from "./navigation/index";
import GlobalStyle from "../src/styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Dark}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

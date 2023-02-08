import React from "react";

import { ThemeProvider } from "styled-components";
import Routes from "./navigation/index";
import GlobalStyle from "../src/styles/GlobalStyles";
import { useTheme } from "./hooks/theme";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

import { useState, createContext, useContext } from "react";
import dark from "../styles/themes/dark";
import Light from "../styles/themes/Light";

interface IThemeContext {
  toggleTheme: () => void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    sucess: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@minha-carteira:theme");
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = (): void => {
    if (theme.title === "Dark") {
      setTheme(Light);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(Light));
    } else {
      setTheme(dark);
      localStorage.setItem("@minha-carteira:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };

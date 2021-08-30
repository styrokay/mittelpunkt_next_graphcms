import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../global/Themes";
import GlobalStyle from "../global/GlobalStyle";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState("default");

  return (
    <AppContext.Provider value={theme}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import * as React from "react";








const ThemeContext = React.createContext(undefined);







export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}) {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (switchable) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
  };

  return (
    _jsxDEV(ThemeContext.Provider, { value: { theme, toggleTheme }, children: 
      children
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 37}, this)
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}


import { createContext, useContext } from "react";

// Default values for the context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Export the provider for wrapping components
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the theme context
export default function useTheme() {
  return useContext(ThemeContext);
}

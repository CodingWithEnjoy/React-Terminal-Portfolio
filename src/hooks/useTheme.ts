import { ThemeContext } from "./../contexts/themeContext";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  return { theme, setTheme };
};

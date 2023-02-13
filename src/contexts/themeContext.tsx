import React, { createContext, useState } from "react";

interface ThemeTypes {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeTypes | string | null>(
  "dracula"
);

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dracula");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

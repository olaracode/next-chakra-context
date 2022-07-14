import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  let [isDarkTheme, setDarkTheme] = useState(false);

  const data = {
    isDarkTheme,
    setDarkTheme,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

export function useLocalStorageState(key, values) {
  const [value, setValue] = useState(
    useState(() => {
      const presistedValue = localStorage.getItem(key);
      return presistedValue ? presistedValue : values;
    })
  );

  useEffect(() => {
    localStorage.setItem(key, values);
  }, [key, values]);

  return [value, setValue];
}

export default function DarkModeProvaider({ children }) {
  const [mode, setMode] = useState(false);

  function darkMode() {
    setMode(!mode);
  }

  function isDarkMode() {
    if (localStorage.getItem("DarkMode") !== "darkMode") {
      return false;
    } else {
      return true;
    }
  }

  const value = { isDarkMode, darkMode, mode, setMode };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

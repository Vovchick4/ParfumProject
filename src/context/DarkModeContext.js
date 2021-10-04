import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

export function useLocalStorageState(key, values) {
  const [value, setValue] = useState(
    useState(() => {
      const presistedValue = localStorage.getItem(key);
      return presistedValue !== null ? presistedValue : values;
    })
  );

  useEffect(() => {
    localStorage.setItem(key, values);
  }, [key, values]);

  return [value, setValue];
}

export default function DarkModeProvaider({ children }) {
  const [mode, setMode] = useLocalStorageState("DarkMode", "darkMode");

  function darkMode() {
    if (mode !== "darkMode") {
      setMode("lightMode");
    } else {
      setMode("darkMode");
    }
  }

  function isDarkMode() {
    if (localStorage.getItem("DarkMode") !== "darkMode") {
      return false;
    } else {
      return true;
    }
  }

  const value = { isDarkMode, darkMode };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

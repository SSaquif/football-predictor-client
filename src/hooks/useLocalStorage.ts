import { useState } from "react";

function useLocalStorage(key: string, initialValue: Object) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Try retrieve from localStorage
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // TODO: Better Error Handling
      console.log("localStorage error", error);
      return initialValue;
    }
  });

  // Wrapper for setState with similar Api (can receive callback)
  const setValue = (value: Object) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      //TODO: Error Handling
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

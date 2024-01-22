// ScrollContext.js
import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = (progress) => {
    setScrollProgress(progress);
  };

  return (
    <ScrollContext.Provider value={{ scrollProgress, updateScrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};

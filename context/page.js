"use client";

import { createContext, useContext } from "react";

const PageContext = createContext("");

export default function PageWrapper({ value, children }) {
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
}

export const usePageContext = () => {
  return useContext(PageContext);
};
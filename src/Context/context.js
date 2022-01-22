import React, { createContext, useState } from "react";
import { data } from "../mock";
import { Filter } from "./filter";

export const MainContext = createContext();

export const Context = ({ children }) => {
  const [state, setState] = useState(data);
  return (
    <MainContext.Provider value={[state, setState]}>
      <Filter>{children}</Filter>
    </MainContext.Provider>
  );
};

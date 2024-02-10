"use client";

import { createContext, useEffect, useState } from "react";
import { Theme, darkTheme, lightTheme } from "./ui/themes";
import axios from "axios";

let context_values: any;
export const Context = createContext(context_values);

export const ContextProvider = (props: any) => {
  const [current_theme, changeTheme] = useState(darkTheme);
  const [selected_band, changeBand] = useState("nothing");

  const context_values = {
    current_theme,
    changeTheme,
    selected_band,
    changeBand,
  };

  return (
    <Context.Provider value={context_values}>{props.children}</Context.Provider>
  );
};

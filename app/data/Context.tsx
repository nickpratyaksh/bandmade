"use client";

import { createContext, useEffect, useState } from "react";
import { ThemeSetter } from "./ThemeSetter";

let context_values: any;
let saved_theme: any;
export const Context = createContext(context_values);

export const ContextProvider = (props: any) => {
  if (typeof window !== "undefined") {
    saved_theme = ThemeSetter();
  }

  const [current_theme, changeTheme] = useState(saved_theme);
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

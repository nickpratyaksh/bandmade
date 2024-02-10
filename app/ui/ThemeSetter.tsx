"use client";

import { useContext, useEffect } from "react";
import { darkTheme, lightTheme } from "./themes";
import { Context } from "../Context";

export const ThemeSetter = () => {
  let { current_theme, changeTheme } = useContext(Context);
  let saved_theme: any;
  const data = localStorage.getItem("saved_theme");
  if (data != null) {
    saved_theme = JSON.parse(data);
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("saved_theme", JSON.stringify(darkTheme));
      saved_theme = darkTheme;
    } else {
      localStorage.setItem("saved_theme", JSON.stringify(lightTheme));
      saved_theme = lightTheme;
    }
  }
  useEffect(() => {
    changeTheme(saved_theme);
  }, []);
};

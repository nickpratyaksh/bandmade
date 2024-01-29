"use client";

import { darkTheme, lightTheme } from "../ui/themes";

export const ThemeSetter = () => {
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

  return saved_theme;
};

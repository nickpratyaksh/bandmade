"use client";

import { useContext, useEffect } from "react";
import BandSection from "../ui/Componenets/BandsSection";
import { Context } from "../data/Context";
import { darkTheme, lightTheme } from "../ui/themes";
import { ThemeSetter } from "../data/ThemeSetter";
import { usePathname } from "next/navigation";
import MainPage from "../ui/Componenets/MainPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  let { current_theme, changeTheme } = useContext(Context);

  if (typeof window !== "undefined") {
    ThemeSetter();
  }

  let path = usePathname();
  return (
    <div className="flex">
      <BandSection />
      <div className="flex flex-col h-screen w-full">
        <div
          onClick={() => {
            changeTheme(current_theme == lightTheme ? darkTheme : lightTheme);
            localStorage.setItem(
              "saved_theme",
              JSON.stringify(
                current_theme == lightTheme ? darkTheme : lightTheme
              )
            );
          }}
          className={`${current_theme.highlight} h-8 text-white text-center
        font-bold flex flex-col justify-center cursor-pointer`}
        >
          WishCord
        </div>
        <div className={`flex h-full ${current_theme.secondary_light}`}>
          {path == "/" ? <MainPage /> : <>{children}</>}
        </div>
      </div>
    </div>
  );
}

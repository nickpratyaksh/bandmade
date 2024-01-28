"use client";

import { useContext } from "react";
import BandSection from "../ui/Componenets/BandsSection";
import { Context } from "../data/Context";
import MembersSection from "../ui/Componenets/MembersSection";
import { darkTheme, lightTheme } from "../ui/themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  let { current_theme, changeTheme } = useContext(Context);
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
          className={`${current_theme.highlight} h-8 ${current_theme.text} text-center
        font-bold flex flex-col justify-center cursor-pointer`}
        >
          WishCord
        </div>
        <div className="flex h-full">{children}</div>
      </div>
    </div>
  );
}

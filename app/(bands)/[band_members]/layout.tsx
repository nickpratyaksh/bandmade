"use client";

import { Context } from "@/app/data/Context";
import MembersSection from "@/app/ui/Componenets/MembersSection";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  let { current_theme } = useContext(Context);
  const params = useParams();
  return (
    <>
      <MembersSection selected_band={params.band_members} />
      <div
        className={`${current_theme.text} ${current_theme.secondary_light} flex flex-col w-full`}
      >
        {children}
      </div>
    </>
  );
}

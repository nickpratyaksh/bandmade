"use client";

import { Context } from "@/app/lib/Context";
import { band_members } from "@/app/lib/data";
import React, { useContext } from "react";
import { Member } from "../Components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MembersSection({
  selected_band,
}: {
  selected_band: any;
}) {
  let { current_theme } = useContext(Context);
  let membernameInPath = usePathname();
  membernameInPath = membernameInPath
    .substring(membernameInPath.lastIndexOf("/") + 1)
    .replace("%20", " ");
  return (
    <div className={`${current_theme.primary} ${current_theme.text} w-96`}>
      {selected_band == "nothing" ? (
        <p>Please select a band to view its members</p>
      ) : (
        band_members.map((item, i) => {
          if (item.band == selected_band)
            return (
              <Link href={`/${selected_band}/${item.name}`} key={i}>
                <Member
                  name={item.name}
                  image_url={item.image_url}
                  nameInPath={membernameInPath}
                />
              </Link>
            );
        })
      )}
    </div>
  );
}

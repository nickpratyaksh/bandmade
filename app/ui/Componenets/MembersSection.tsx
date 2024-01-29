"use client";

import { Context } from "@/app/data/Context";
import { band_members } from "@/app/data/data";
import React, { useContext } from "react";
import { Member } from "../Components";
import Link from "next/link";

export default function MembersSection({
  selected_band,
}: {
  selected_band: any;
}) {
  let { current_theme, changeBand } = useContext(Context);
  changeBand(selected_band);
  return (
    <div className={`${current_theme.primary} ${current_theme.text} w-96`}>
      {selected_band == "nothing" ? (
        <p>Please select a band to view its members</p>
      ) : (
        band_members.map((item, i) => {
          if (item.band == selected_band)
            return (
              <Link href={`/${selected_band}/${item.name}`}>
                <Member name={item.name} image_url={item.image_url} />
              </Link>
            );
        })
      )}
    </div>
  );
}

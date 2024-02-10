"use client";

import { Context } from "@/app/Context";
import { band_members } from "@/app/data";
import React, { useContext, useEffect, useState } from "react";
import { Member } from "../Components";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import axios from "axios";

export default function MembersSection({
  selected_band,
}: {
  selected_band: any;
}) {
  let { current_theme } = useContext(Context);
  let membernameInPath = usePathname();
  const [members, updateMembers] = useState<
    {
      name: string;
      image_url: string;
    }[]
  >([]);
  membernameInPath = membernameInPath
    .substring(membernameInPath.lastIndexOf("/") + 1)
    .replace("%20", " ");

  const getMembers = async () => {
    try {
      const res = await axios.get(`/api/bands/members?query=${selected_band}`);
      updateMembers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className={`${current_theme.primary} ${current_theme.text} w-96`}>
      {selected_band == "nothing" ? (
        <p>Please select a band to view its members</p>
      ) : (
        members.map(
          (
            item: {
              name: string;
              image_url: string;
            },
            i
          ) => {
            return (
              <Link href={`/${selected_band}/${item.name}`} key={i}>
                <Member
                  name={item.name}
                  image_url={item.image_url}
                  nameInPath={membernameInPath}
                />
              </Link>
            );
          }
        )
      )}
    </div>
  );
}

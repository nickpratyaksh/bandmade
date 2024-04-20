"use client";

import { Context } from "@/app/Context";
import React, { useContext, useEffect, useState } from "react";
import { MemberItem } from "../Components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteBand, getMembers } from "@/app/api/actions";
import { GoPlus } from "react-icons/go";

export default function MembersSection({
  selected_band,
}: {
  selected_band: any;
}) {
  let { current_theme, bands } = useContext(Context);
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

  const getMembersData = async () => {
    try {
      if (bands.length == 0) {
        const res = await getMembers(selected_band);
        updateMembers(JSON.parse(res));
      } else {
        const res = await bands.find(
          (item: { name: string; image_url: string }) =>
            item.name == selected_band
        );
        updateMembers(res.members);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembersData();
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
            i: number
          ) => {
            return (
              <Link href={`/${selected_band}/${item.name}`} key={i}>
                <MemberItem
                  name={item.name}
                  image_url={item.image_url}
                  nameInPath={membernameInPath}
                />
              </Link>
            );
          }
        )
      )}
      <div>---------------Setting---------------</div>
      <div
        className="flex px-2 py-2 m-2 hover:bg-green-600 rounded-xl transition-all 
        duration-200 ease-linear cursor-pointer hover:text-white"
      >
        <div className="w-10 h-10 rounded-full object-cover border border-dotted">
          <GoPlus className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center px-5">Add Member</div>
      </div>

      <div
        className="flex bg-red-700 px-2 py-2 m-2 hover:bg-red-500 rounded-xl transition-all duration-200 ease-linear 
          cursor-pointer hover:text-white"
      >
        <div
          onClick={() => {
            deleteBand(selected_band);
            window.location.reload();
          }}
          className="flex flex-col justify-center px-5"
        >
          Delete Band
        </div>
      </div>
    </div>
  );
}

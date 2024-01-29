"use client";

import { useParams } from "next/navigation";
import { band_members } from "@/app/data/data";

export default function Page() {
  const params = useParams();
  const selected_member = band_members.filter(
    (member) => member.name == params.member.toString().replace("%20", " ")
  )[0];
  return (
    <div className="">
      {selected_member.name}
      <img
        src={selected_member.image_url}
        alt=""
        className="h-80 w-80 object-cover"
      />
    </div>
  );
}

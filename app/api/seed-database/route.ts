import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Band from "../../models/Band";
import Member from "../../models/Member";
import { band_members, bands_list } from "../../data";
import { connectDb } from "../connectDb";

require("../../models/Band");
require("../../models/Member");
connectDb();

export const dynamic = "force-dynamic";
export const GET = async () => {
  try {
    for (let i = 0; i < bands_list.length; i++) {
      console.log(bands_list[i].name);

      const band = await Band.create({
        name: bands_list[i].name,
        icon_url: bands_list[i].icon_url,
      });

      for (let j = 0; j < band_members.length; j++) {
        if (band_members[j].band === bands_list[i].name) {
          console.log(band_members[j].name);

          const member = await Member.create({
            name: band_members[j].name,
            image_url: band_members[j].image_url,
          });
          band.members.push(member.id);
          await band.save();
        }
      }
    }

    // const band = await Band.create({
    //   name: "namasdfe",
    //   icon_url: "iconasdfrul",
    // });
    // const member = await Member.create({
    //   name: "membername",
    //   image_url: "lksjdflk",
    // });
    // band.members.push(member.id);
    // await band.save();

    const bands = await Band.find().populate("members");

    return new NextResponse(JSON.stringify(bands));
  } catch (error: any) {
    return new NextResponse(error);
  }
};

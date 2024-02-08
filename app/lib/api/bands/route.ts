import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

import Band from "../../models/Band";
import Member from "../../models/Member";
import { connectDb } from "../apis";

connectDb();

// export const GET = async () => {
//   try {
//     const band = await Band.find({
//       name: "namasdfe",
//       icon_url: "iconasdfrul",
//     });
//     // const band = await Band.create({
//     //   name: "namasdfe",
//     //   icon_url: "iconasdfrul",
//     // });
//     // const member = await Member.create({
//     //   name: "membername",
//     //   image_url: "lksjdflk",
//     // });
//     // band.members.push(member.id);
//     // await band.save();

//     const bands = await Band.find().populate("members");

//     return new NextResponse(JSON.stringify(bands));
//   } catch (error: any) {
//     return new NextResponse(error);
//   }
// };

export const POST = async (req: NextApiRequest) => {
  try {
    const band = await Band.create({
      name: "Yash's band",
      icon_url: "icon1",
    });

    return new NextResponse(band);
  } catch (error: any) {
    return new NextResponse(error);
  }
};

export const GET = async (res: NextApiResponse) => {
  try {
    const bands = await Band.findById("65c2832bb725f06b60ac4a39").populate(
      "members"
    );
    return new NextResponse(JSON.stringify(bands));
  } catch (error: any) {
    return new NextResponse(error);
  }
};

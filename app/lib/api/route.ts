import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Band from "../models/Band";
import Member from "../models/Member";
import { connectDb } from "./apis";

export const GET = async () => {
  try {
    connectDb();

    const band = await Band.find({
      name: "namasdfe",
      icon_url: "iconasdfrul",
    });
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

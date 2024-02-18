"use server";

import Band from "../models/Band";
import { connectDb } from "./connectDb";

export const dynamic = async () => "force-dynamic";

require("../models/Band");
require("../models/Member");
connectDb();

export async function getBands() {
  try {
    const bands = await Band.find().populate("members");
    console.log("database indexed for bands");
    return JSON.stringify(bands);
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function getMembers(band_name: string) {
  try {
    const bands = await Band.find({ name: band_name }).populate("members");
    console.log("database indexed for members");
    return JSON.stringify(bands[0].members);
  } catch (error: any) {
    return error;
  }
}

export async function createBand(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    icon_url: formData.get("icon_url"),
  };
  const band = await Band.create({
    name: rawFormData.name,
    icon_url: rawFormData.icon_url,
  });
}

export async function deleteBand(band_name: string) {
  await Band.findOneAndDelete({ name: band_name });
}

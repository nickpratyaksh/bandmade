import { connectDb } from "../connectDb";
import Band from "@/app/models/Band";

require("../../models/Band");
require("../../models/Member");
connectDb();

export const GET = async () => {
  try {
    const bands = await Band.find().populate("members");
    return Response.json(bands);
  } catch (error: any) {
    return new Response(error);
  }
};

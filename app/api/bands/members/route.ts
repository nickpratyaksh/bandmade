import { NextRequest } from "next/server";
import { connectDb } from "../../connectDb";
import Band from "@/app/models/Band";

require("../../../models/Band");
require("../../../models/Member");
connectDb();

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  try {
    const bands = await Band.find({ name: query }).populate("members");
    return Response.json(bands[0].members);
  } catch (error: any) {
    return new Response(error);
  }
};

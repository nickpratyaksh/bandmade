import mongoose, { Model, model } from "mongoose";

interface BandMember {
  name: string;
  image_url: string;
}

type MemberModelType = Model<BandMember>;

const bandMemberSchema = new mongoose.Schema<BandMember>({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
});

const Member =
  mongoose.models.Member || mongoose.model("Member", bandMemberSchema);

export default Member;

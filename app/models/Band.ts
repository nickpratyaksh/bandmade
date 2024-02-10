import mongoose, { Model, ObjectId, Schema, Types, model } from "mongoose";

interface Band {
  name: string;
  icon_url: string;
  members: ObjectId[];
}

type BandModelType = Model<Band>;

const bandSchema = new Schema<Band, BandModelType>({
  name: {
    type: String,
    required: true,
  },
  icon_url: {
    type: String,
  },
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
    default: [],
  },
});

const Band = mongoose.models.Band || mongoose.model("Band", bandSchema);

export default Band;

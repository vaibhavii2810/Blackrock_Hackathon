import { Schema, model } from "mongoose";

const nuggetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 100,
  },
});

const Nugget = model("Nugget", nuggetSchema);

export default Nugget;

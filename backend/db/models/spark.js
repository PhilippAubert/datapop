import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    votes: {
      up: Number,
      down: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Spark = mongoose.model("Spark", PostSchema);
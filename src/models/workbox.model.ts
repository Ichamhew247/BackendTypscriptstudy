import mongoose, { Document, Schema, Model } from "mongoose";

const workboxSchema = new Schema(
  {
    workbox_task: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const WorkboxModel = mongoose.model("Workboxs", workboxSchema);

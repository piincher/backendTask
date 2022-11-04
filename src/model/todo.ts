import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    isDone: {
      type: Boolean,
    },
  },

  { timestamps: true }
);
export const Todo = mongoose.model("User", todoSchema);

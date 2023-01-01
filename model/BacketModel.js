const { Schema, model } = require("mongoose");

const backetSchema = new Schema(
  {
    userId: { type: Number, required: true },
    goods: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Backet", backetSchema)

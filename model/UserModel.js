const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 4,
      max: 20,
      lowerCase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    isAdmin: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema)

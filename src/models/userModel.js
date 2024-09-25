import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, "Campo Obrigatório"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Campo Obrigatório"],
    },
    password: { type: String, required: [true, "Campo Obrigatório"] },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;

import mongoose from "mongoose";

async function conectaNaDb() {
  mongoose.connect(process.env.STRING_CONNECTION);

  return mongoose.connection;
}

export default conectaNaDb;

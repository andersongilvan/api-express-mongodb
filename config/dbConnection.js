import mongoose from "mongoose";

async function dbConnection() {
  mongoose.connect(process.env.STRING_CONNECTION);

  return mongoose.connection;
}

export default dbConnection;

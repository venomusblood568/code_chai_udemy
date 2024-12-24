import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n monogoDB connected !! DB HOTS: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongoDB connection error", error);
    process.exit(1); // means if things go south just exit
  }
};

export default connectdb
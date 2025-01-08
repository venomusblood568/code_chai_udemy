import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDB connected successfully!!");
    });

    connection.on("error", (err) => {
      console.log("Mongo connection error !!!" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Oops!! something went wrong....");
    console.log(error);
  }
}

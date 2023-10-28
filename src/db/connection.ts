import mongoose from "mongoose";

const URI = process.env.MONGO_URI;
const connection = () => {
  try {
    if (URI) {
      mongoose.connect(URI);
      console.log("mongodb COnnected");
    }
  } catch (error: any) {
    console.log("error>>>", error);
  }
};

export default connection;

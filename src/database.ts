import * as mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/courseDB");
    console.log("MongoDB connection connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;

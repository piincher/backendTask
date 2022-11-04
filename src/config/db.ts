import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongourl = process.env.MONGO_URI as string;

    const conn = await mongoose.connect(mongourl);
    console.log(`mongo connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

export { connectDB };

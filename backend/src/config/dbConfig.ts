import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DATABASE_STRING}`);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1); // to terminate program
  }
};

export default connectDb;

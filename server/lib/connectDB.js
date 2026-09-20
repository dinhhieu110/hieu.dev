import mongoose from "mongoose"

const connectDB = async () => {
  console.log("process.env.DB_PASS:", process.env.MONGO)
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connected to Database")
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
// config/database.js
import mongoose from 'mongoose';

const uri = "mongodb+srv://patrickramosmotta:rMABnuzebiKcwCmS@devices.cmyelda.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;

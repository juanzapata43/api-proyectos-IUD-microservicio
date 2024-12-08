import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error('Conexión con BD erronea:', error.message);
    process.exit(1); 
  }
};

export default connectDB;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const UniversitySchema = new Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String },
  phone: { type: String },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date }
});

const University = mongoose.model('University', UniversitySchema);

export default University;
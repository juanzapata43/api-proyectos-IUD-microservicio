import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectSchema = Schema({
  number: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
  value: { type: Number, required: true },
  creationDate: { type: Date },
  updateDate: { type: Date },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  projectType: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectType', required: true },
  university: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
  stage: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage', required: true }
});

const Project = mongoose.model('Project', ProjectSchema)

export default Project;
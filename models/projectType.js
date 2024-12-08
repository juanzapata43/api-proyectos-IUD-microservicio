import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProjectTypeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    creationDate: { type: Date, default: Date.now },
    updateDate: { type: Date }
});

const ProjectType = mongoose.model('ProjectType', ProjectTypeSchema);

export default ProjectType;
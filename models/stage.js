import mongoose from 'mongoose';
const { Schema } = mongoose;

const StageSchema = new Schema({
    name: { type: String, required: true, unique: true },
    creationDate: { type: Date, default: Date.now },
    updateDate: { type: Date }
});

const Stage = mongoose.model('Stage', StageSchema)

export default Stage;
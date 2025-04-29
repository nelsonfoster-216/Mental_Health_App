import mongoose from 'mongoose';

const cycleLogSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  state: {
    type: String,
    enum: ['CRASH OUT', 'LOCK IN'],
    required: true
  },
  intensity: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  notes: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('CycleLog', cycleLogSchema); 
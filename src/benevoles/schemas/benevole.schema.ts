import * as mongoose from 'mongoose';

export const BenevoleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  refugeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  refugeName: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
});

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
  idRefuge: {
      type: Number,
      required: true,
      trim: true,
    },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
});

import * as mongoose from 'mongoose';

export const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  diet: {
    type: String,
    required: true,
    trim: true,
  },
  health: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  enterDate: {
    type: Date,
    required: true,
    trim: true,
  },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
});

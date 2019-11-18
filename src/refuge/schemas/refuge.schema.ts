import * as mongoose from 'mongoose';

export const RefugeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^(\+\d{11})$/,
  },
  address: {
    street: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
});

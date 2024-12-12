// models/User.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the User Schema
const userSchema = new Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
    index: true, // Improves query performance
  },
  username: {
    type: String,
    required: true,
  },
  discriminator: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // URL to the user's Discord avatar
  },
  email: {
    type: String,
    // Discord may not always provide an email, depending on the user's privacy settings
    // Hence, it's optional
  },
  correctAnswers: {
    type: [Number], // Array of numbers
    default: [], // Initialize with an empty array
  },
  mistakes: {
    type: [Number], // Array of numbers
    default: [], // Initialize with an empty array
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Optional: Add timestamps for createdAt and updatedAt
// This automatically manages createdAt and updatedAt fields
// Uncomment the following line if desired
// const userSchema = new Schema({ ... }, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

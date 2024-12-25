import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to hash the password before saving a user document
userSchema.pre("save", async function (next) {
  // If the password field has not been modified, skip this middleware
  if (!this.modified("password")) return next();

  // Hash the password using bcrypt with a salt round of 10
  this.password = await bcrypt.hash(this.password, 10);

  // Proceed to the next middleware
  next();
});

// Method to check if the provided password matches the hashed password in the database
userSchema.methods.isPasswordCorrect = async function (password) {
  // Compare the plain text password with the hashed password stored in the database
  return await bcrypt.compare(password, this.password);
};

// Method to generate a short-lived access token for authentication
userSchema.methods.generatorAccessToken = function () {
  // Sign a JWT with user-specific data and a secret, and set it to expire
  return jwt.sign(
    {
      _id: this._id, // User's unique identifier
      email: this.email, // User's email
      username: this.username, // User's username
      fullName: this.fullName, // User's full name
    },
    process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the token
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // Token expiration time (e.g., '15m')
  );
};

// Method to generate a long-lived refresh token for renewing access tokens
userSchema.methods.generatorRefreshToken = function () {
  // Sign a JWT with the user's unique identifier and a different secret
  return jwt.sign(
    {
      _id: this._id, // User's unique identifier
    },
    process.env.REFRESH_TOKEN_SECRET, // Secret key for signing the refresh token
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY } // Refresh token expiration time (e.g., '7d')
  );
};



export const User = mongoose.model("User", userSchema);

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOncloudinary,deleteFromCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;

  // Validation
  if (
    [fullname, username, email, password].some(
      (field) => typeof field !== "string" || field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  } 

  // Check if user exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  console.warn(req.files)
  // File upload paths
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  // Upload avatar to cloudinary
  const avatar = await uploadOncloudinary(avatarLocalPath);
  if(!avatar || !avatar.url){
    throw new ApiError(500,"Failed to upload avatar to cloudinary");
  } 


  // Upload cover image if provided
  let coverImage = "";
  if (coverLocalPath) {
    const cover = await uploadOncloudinary(coverLocalPath);
    if(cover && cover.url){
      coverImage = cover.url;
    }else{
      console.log("Cover image upload failed")
    }
  }

  try {
    // Create user
    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });
  
    // Fetch created user without sensitive data
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
  
    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering a user");
    }
  
    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.log("user creation failed")
    if(avatar){
      await deleteFromCloudinary(avatar.publicId)
    }
    if(avatar){
      await deleteFromCloudinary(coverImage.publicId)
    }
    throw new ApiError(500, "Something went wrong while registering a user and images were deleted!!");
  }
});

export { registerUser };

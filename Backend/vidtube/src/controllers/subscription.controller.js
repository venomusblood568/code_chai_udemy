import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.models.js";
import { Subscription } from "../models/subscription.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  //todo => toggle subscription
  //step1 - validation of channelId
  if (!mongoose.isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid Channel ID");
  }
  //step 2 - Verify channel existence
  const channel = await User.findById(channelId);
  if (!channel) {
    throw new ApiError(400, "Channel not found!!");
  }
  //step3 - chanenl validate =>
  const { userId } = req.user;
  //step4 - check for existing subscriptions
  const existingSubscription = await Subscription.findOne({
    user: channelId,
    subscriber: userId,
  });

  //step5 - toggle sub
  //If a subscription exists (unsubscribe)
  if (existingSubscription) {
    await Subscription.findByIdAndDelete(existingSubscription._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Unsubscribed successfully"));
  }

  //If no subscription exists (subscribe)
  try {
    const newSubscription = new Subscription({
      user: channelId,
      subscriber: userId,
    });

    await newSubscription.save();
    return res
      .status(200)
      .json(new ApiResponse(200, "Subscribed successfully"));
  } catch (error) {
      throw new ApiError(
        500,
        "Something went wrong while Subscribing"
      );
  }
});

const getUserChannelSubscribers = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  // Validate channelId
  if (!mongoose.isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid Channel Id");
  }

  // Verify channel existence
  const channel = await User.findById(channelId);
  if (!channel) {
    throw new ApiError(400, "Channel not found!!");
  }

  // Get Subscriber
  try {
    const subscribers = await Subscription.find({ user: channelId }) // Use `find` instead of `findById`
      .populate("subscriber", "name email"); // Populate subscriber details

    if (!subscribers || subscribers.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "No subscribers found for this channel",
        data: [],
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Subscribers retrieved successfully",
      data: subscribers,
    });
  } catch (error) {
    throw new ApiError(500, "Something went wrong while fetching data");
  }
});

const getSubscribedChannels = asyncHandler(async (req, res) => {
  const { subscriberId } = req.params;

  // Validate SubscribedId
  if(!mongoose.isValidObjectId(subscriberId)){
    throw new ApiError(400, "Invalid Subscribe Id");
  }

  // Get subscribed channel
  try {
    const subscriptions = await Subscription.find({
      subscriber: subscriberId,
    }).populate("user", "name email");

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Subscribed channels retrieved successfully",
          subscriptions
        )
      );
    
  } catch (error) {
    throw new ApiError(500,"something went wrong while fetching the subscribed count")
  }
});

export { toggleSubscription, getUserChannelSubscribers, getSubscribedChannels };

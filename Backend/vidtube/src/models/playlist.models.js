import mongoose,{Schema} from "mongoose";

const playlistSchema = new Schema(
{
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    video:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
}, {timestamps:true}
)

export const playlist = mongoose.model("Playlist",playlistSchema)
import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema=new Schema(
    {
        videofile:{
             type:String, //cloudniry Url
             required:true
        },        
        thumbnail:{
            type:String, //cloudniry Url
            required:true
       },
       title:{
        type:String, 
        required:true
     },
     descriptin:{
        type:String, 
        required:true
   },
   duration:{
    type:Number,
    required:true
   },
   views:{
    type:Number, //cloudniry Url
    default:0
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)
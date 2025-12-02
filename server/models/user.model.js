import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    firstName:{
      type:String,
      required:true,
      minlenght:[3, 'atleast 3 character long required']
    },
     lasttName:{
      type:String,
      required:true,
      minlenght:[3, 'atleast 3 character long required']
    }
  },
  email:{
      type:String,
      required:true,
      minlenght:[5, 'atleast 5 character long required']
  },
  password:{
      type:String,
      required:true,
      minlenght:[6, 'atleast 6 character long required']
  },
  socketID:{
       type:String
  }
})
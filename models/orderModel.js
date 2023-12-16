import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    names:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },     
    phone:{
        type:Number,
        required:true
    },
    status: {
        type: String,
        enum: ['pending', 'complete'],
        default: 'pending', // Set a default value if needed
      },
    productNumber:{
        type:String,
        required:true
    },
    selectedDistrict:{
        type:String,
        required:true
    },    
    // photo: {
    //     data: Buffer,
    //     contentType: String
    // },
    quantities:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

   
    size:{
        type:String,
        required:true
    },
    
     delivery: {
        type:Number,
        required: true,
     },
       amount: {
        type:Number,
        required: true,
     },
      total: {
        type:Number,
        required: true,
     },
     

},{timestamps:true})

export default mongoose.model('Orders', orderSchema)
import mongoose, { model, models, Schema } from "mongoose";

import { ObjectId } from 'mongoose';

export  interface IImage extends Document {
    title: string;
    transforamtion: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: Record<string, any>;
    transforamtionUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id:string,
        firstName:string,
        lastname:string
    };
    createdAt?: Date;
    updatedAt?: Date;
}






const ImageSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    transforamtion:{
        type:String,
        required:true,
    },
    publicId:{
        type:String,
        required:true,
    },
    secureUrl:{
        type:URL,
        required:true,
    },
    width:{
        type:Number
    },
    height:{
        type:Number,
    },
    config:{
        type:Object
    },
    transforamtionUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{
        type:Schema.Types.ObjectId,ref:'User'
    },
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

const Image=models?.Image||model('Image',ImageSchema)

export default Image
import mongoose from "mongoose";

const { Schema } = mongoose; 

const PostSchema = new Schema({
    
    db: String, 
    title: String, 
    body: String, 
    votes: {
        up: Number, 
        down: Number, 
    }, 
}, 
{
    timestamps: true, 
    versionKey: false 
}); 

export const Note = mongoose.model("Spark", PostSchema);
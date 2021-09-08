const mongoose = require('mongoose'); 

const {Schema} = mongoose; 

const PostSchema = new Schema({
    
    db:String, 
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


module.exports = mongoose.model('Note', PostSchema); 

const mongoose= require('mongoose');

const postSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports= new mongoose.model('Post', postSchema);
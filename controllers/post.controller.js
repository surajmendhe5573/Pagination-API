const Post= require('../models/post.model');

const createPost= async(req, res)=>{
    try {
        const {title, description}= req.body;

        if(!title || !description){
            return res.status(400).json({message: "Title and Description are required"});
        }

        const newPost= new Post({
            title,
            description
        });

        const savedData= await newPost.save();
        res.status(201).json({message: 'Post created successfully', data:newPost});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

const getAllPosts= async(req, res)=>{
    try {
        const page= parseInt(req.query.page) || 1
        const perPage= 3;
        const totalPosts= await Post.countDocuments();
        const totalPages= Math.ceil(totalPosts/perPage);

        if(page > totalPages){
            return res.status(404).json({message: 'Page not found'});
        }

        const posts= await Post.find()
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec()

        res.status(200).json({posts, totalPages, page});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports= {createPost, getAllPosts};


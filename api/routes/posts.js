const router = require("express").Router();

const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// create new post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err)
    }
}

)

// update post (broken?)
router.put("/:id", async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true}
        );
        res.status(200).json(updatedPost)
    }catch(err){
        res.status(500).json(err)
    }
}

)

// delete post

// get post
//GET POST
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get all posts
//GET ALL POSTS
router.get("/", async (req, res) => {
    // const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
    //   if (username) {
    //     posts = await Post.find({ username });
    //   } else if (catName) {
    //     posts = await Post.find({
    //       categories: {
    //         $in: [catName],
    //       },
    //     });
    //   } else {
    //     posts = await Post.find();
    //   }
      posts = await Post.find().sort({'createdAt': -1});
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router
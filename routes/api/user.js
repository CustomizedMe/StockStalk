const express = require('express');
const router = express.Router();
const { check, validationResult } =  require('express-validator');
const auth = require('../../middleware/auth');

const Comment =  require('../../models/comment');
const User =  require('../../models/User');


// @route POST api/user/comment/add
// @desc Create a comment 
// @access Private
router.post('/comment/add',[auth, [
    check('text', 'Test is required')
    .not()
    .isEmpty(),
    check('symbol', 'Company is required')
    .not()
    .isEmpty()    
]
],
async  (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    try {
        
        const user = await User.findById(req.user.id).select('-password');
        const newComment = new Comment({
            text : req.body.text,
            symbol : req.body.symbol,
            username : user.username,
            user:req.user.id
        });

        const post = await newComment.save();
        res.json(post);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
// @route Get api/user/comment/all
// @desc get all comments 
// @access Private
router.get('/comment/all', auth , async (req,res) => {
    try {
        const allcomments = await Comment.find().sort({date: -1});
        res.json(allcomments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// @route Get api/user/comment/:username
// @desc get all comments 
// @access Private
router.get("/comment/:username", async (req, res) => {
    try {
      const Username = req.params.username; //change this to logged -in user id
      /*const userID = User.
      console.log(userID);
      const result = await Comment.findById(userID).populate("posts");*/
      const result = await Comment.find({"username" :Username}).populate("comments");
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500)
      .send("Server error");
    }
  });
// @route Get api/user/comment/company/:symbol
// @desc get comments in a company
// @access Private
router.get("/comment/company/:symbol", async (req, res) => {
    try {
      const Symbol = req.params.symbol; 
      const result = await Comment.find({"symbol" : Symbol}).populate("comments");
      res.send(result);
    } catch (err) {
      console.log(err);
      res.status(500)
      .send("Server error");
    }
  });
/*
// @route PUT api/user/comment/:comment_id
// @desc edit the comment by id 
// @access Private
router.put("/comment/:comment_id", async (req, res) => {
    try {
        Comment.findOneAndUpdate({_id:req.params.comment_id}, req.body {
            res.send(place);
          });
    } catch (err) {
      console.log(err);
      res.status(500)
      .send("Server error");
    }
  });
*/



module.exports = router;

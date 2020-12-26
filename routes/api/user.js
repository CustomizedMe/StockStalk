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
// @route Get api/user/comment/user
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
// @route Get api/user/comment/user
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
module.exports = router;

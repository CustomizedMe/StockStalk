const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Comment = require("../../models/comment");
const User = require("../../models/user");
const Profile = require("../../models/profile");

// @route    GET api/user/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/profile/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["username", "name"]);

    //console.log(profile);

    ///if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/:username
// @desc     Get profile by user ID
// @access   Public
router.get("/profile/:username", auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    // console.log(user);
    const profile = await Profile.findOne({
      user: user._id,
    }).populate("user", ["name"]);
    // console.log(profile);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    POST api/user/profile/
// @desc     Create or update user profile
// @access   Private
router.post(
  "/profile/",
  [
    auth,
    [
      check("about", "About is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("designation", "Designation is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const { company, designation, about, gender, picture, social } = req.body;
    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (designation) profileFields.designation = designation;
    if (gender) profileFields.gender = gender;
    if (about) profileFields.about = about;
    if (picture) profileFields.picture = picture;
    // Build social object
    profileFields.social = social;
    // console.log(profileFields);
    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      // console.log(profile);
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/profile/users/all", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "username",
      "name",
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/user/comment/add
// @desc Create a comment
// @access Private
router.post("/comment/add", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newComment = new Comment({
      text: req.body.text,
      symbol: req.body.symbol,
      username: user.username,
      user: req.user.id,
    });

    const post = await newComment.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route Get api/user/comment/all
// @desc get all comments
// @access Private
router.get("/comment/all", async (req, res) => {
  try {
    const allcomments = await Comment.find().sort({ date: -1 });
    res.json(allcomments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
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
    const result = await Comment.find({ username: Username }).populate(
      "comments"
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// @route Get api/user/comment/company/:symbol
// @desc get comments in a company
// @access Private
router.get("/comment/company/:symbol", async (req, res) => {
  try {
    const Symbol = req.params.symbol;
    const result = await Comment.find({ symbol: Symbol }).populate("comments");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

/*

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  "/comment/:comment_id",
  auth,
  checkObjectId("id"),
  check("text", "Text is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const comment = await Comment.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        symbol: commment.symbol,
        user: req.user.id,
      };

      comment.comments.unshift(newComment);

      await comment.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);



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

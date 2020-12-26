const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User  =  require('../../models/User');

// @route  POST api/auth/register
// @desc   regitering the user
// @access public 
router.post(
    '/register/',   
    [
        check('name','Name is required')
        .not()
        .isEmpty(),
        check('username','Username is required')
        .not()
        .isEmpty(),
        check('email','Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter password with 8 or more characters'
        ).isLength({ min:8 })
    ],
    async (req,res) => {
        const errors= validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {name,username,email,password} = req.body;

        try{
        //see if user exists 
        let user = await User.findOne({email});
            if (user){
                return res.status(400).json({errors: [{ msg : 'User aready exists'}] });
            }
        user = new User({
            name,
            username,
            email,
            password
        });
        //Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        //Return jsonwebtoken
        const payload = {
            user : {
                id : user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn:36000
            },
            (err,token)=>{
                if (err) throw err;
                res.json({ token });
            }
            );
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }        
});
/*
// @route POST api/auth/token
// @desc Authnticate user & get token
// @access Public
router.get('/token',auth, async (req,res) =>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
*/
// @route POST api/auth/
// @desc Authnticate user & get token
// @access Public
router.post(
    '/login/',   
    [
        check('email','Please include a valid email').isEmail(),
        check(
            'password',
            'Password is required'
        ).exists()
    ],
    async (req,res) => {
        const errors= validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {email,password} = req.body;

        try{
        //see if user exists 
        let user = await User.findOne({email});
        if (!user){
            return res
            .status(400)
            .json({errors: [{ msg : 'Invalid Creds'}] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res
            .status(400)
            .json({errors: [{ msg : 'Invalid Creds'}] });

        }

        //Return jsonwebtoken
        const payload = {
            user : {
                id : user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn:36000
            },
            (err,token)=>{
                if (err) throw err;
                res.json({ token });
            }
            );
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
        
        
});
/* router.get("/logout/",(req,res)=>{
    req.logout();
    res.redirect("/");
}); 
*/

/*
//delete token
User.methods.deleteToken=function(token,cb){
    var user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}
// @route GET api/auth/logout
// @desc logout user
// @access Public
app.get('/api/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

}); 
*/

module.exports = router;

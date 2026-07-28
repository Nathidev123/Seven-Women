
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
    //token stored safely in .env
}
//loginUser
const loginUser = async (req, res) => {
    const { name, email, password } = req.body
    //res.json({mssg: 'login user'})

    try{
        const user = await User.login(name, email, password)
        const token = createToken(user._id)

        res.status(200).json({name, email, token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}









//signup user
const signupUser = async (req, res) => {
    //res.json({mssg: 'signup user'})
    const { name, email, password } = req.body

    try{
        const user = await User.signup(name, email, password)
        //signup the method created in model to hash

        const token = createToken(user._id)

        res.status(200).json({ name, email, token })
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,
                signupUser
}
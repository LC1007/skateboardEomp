require('dotenv').config()
const { sign, verify } = require('jsonwebtoken');

function createToken(user){
    return sign({
        userPass: user.userPass,
        emailPass: user.emailPass
    }, 
        process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

module.exports = {
    createToken
}
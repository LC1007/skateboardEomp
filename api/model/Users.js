const db = require('../config');
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/AuthenticateUser');

class Users{
    fetchUsers(req, res){
        const query = 'SELECT * FROM Users'

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchUser(req, res){
        const query = `SELECT * FROM Users WHERE userID = ?`
        const { userID } = req.params
        
        db.query(query, [userID], (res, result) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    // Register a user

    async registerUser(req, res){
        const data = req.body

        data.userPass = await hash(data.userPass, 15)

        const user = {
            emailPass: data.userPass,
            userPass: data.userPass
        }
        const query = `INSERT INTO Users SET ?`

        db.query(query, [data], (err) =>{
            if(err) throw err
            let token = createToken(user)
            res.json({
                status: res.statusCode,
                token,
                msg: "User has been added"
            })
        })
    }
}

module.exports = Users
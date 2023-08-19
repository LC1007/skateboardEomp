const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = 'SELECT * FROM Skateboards;'

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
}

module.exports = Products
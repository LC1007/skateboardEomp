const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = 'SELECT * FROM skateboards;'

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res){
        const query = `SELECT * FROM skateboards WHERE skateID = ?`
        const { skateID } = req.params

        db.query(query, [skateID], (err, result) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    registerProduct(req, res){
        const query = `INSERT INTO skateboards SET ?`
        const data = req.body

        db.query(query, [data], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been added"
            })
        })
    }

    updateProduct(req, res){
        const query = `UPDATE skateboards SET ? WHERE skateID = ?`
        const { skateID } = req.params
        const data = req.body

        db.query(query, [data, skateID], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Skateboard has been updated"
            })
        })
    }

    deleteProduct(req, res){
        const query = `DELETE FROM skateboards WHERE skateID = ?`
        const { skateID } = req.params

        db.query(query, [skateID], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Skateboard has been deleted"
            })
        })
    }
}

module.exports = Products
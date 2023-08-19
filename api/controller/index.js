const express = require('express')
const router = express()
const { products } = require('../model')

router.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

module.exports = {
    express,
    router
}


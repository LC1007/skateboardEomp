const express = require('express')
const router = express()
const { products, users } = require('../model')
const bodyParser = require('body-parser')

router.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

router.get('/product/:skateID', (req, res) =>{
    products.fetchProduct(req, res)
})

router.post('/products', bodyParser.json(), (req, res) =>{
    products.registerProduct(req, res)
})

router.patch('/products/:skateID', bodyParser.json(), (req, res) =>{
    products.updateProduct(req, res)
})

router.delete('/products/:skateID', (req, res) =>{
    products.deleteProduct(req, res)
})

router.post('/user', bodyParser.json(), (req, res) =>{
    users.registerUser(req, res)
})

module.exports = {
    express,
    router
}


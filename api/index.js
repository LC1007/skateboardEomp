const { express, router } = require('./controller')
const app = express()
const port = process.env.PORT || 1738
const path = require('path')

app.use(express.static('./static'), express.urlencoded({ extended: false }), router)

app.get('^/$|/skate', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})

app.listen(port, ()=>{
    console.log(`You are using port http://localhost:${port}`);
})
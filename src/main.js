import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

// web server
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// routes
const router = express.Router()
router.get('/', function (req, res) {

  res.send('Hola mundo!!!')

})
router.get("/dos", function(req, res){

  res.send("hola mundodosssss!!!")
})
//crear las rutas para el blog
router.get('/index', function (req, res) {
  res.send('hola mundodosssss!!!')
})

app.use(router)

// start server
app.listen(3001, function () {
  console.log('Server runnig on opprt 3000')
})

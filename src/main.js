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
router.get('/dos', function (req, res) {
  res.send('hola mundodosssss!!!')
})
// crear las rutas para el blog
const user = { fullname: '', username: '', password: '' }

router.post('/register', function (req, res) {
  try {
    console.log('From backend register: ', req.body)
    user.username = req.body.username
    user.fullname = req.body.fullname
    user.password = req.body.password
    console.log('fullname', user.fullname)
    console.log('username', user.username)
    console.log('password', user.password)

    return res.send('true')
  } catch (error) {
    console.log('Error', error)
    return res.send('false')
  }
})

router.post('/info', function (req, res) {
  try {
    if (user.fullname === '' || user.username === '') throw 'No hay datos en el localstorage'

    return res.send({
      fullname: user.fullname,
      username: user.username
    })
  } catch (error) {
    console.error('Error: ', error)
    return res.send('false')
  }
})

router.post('/logout', (req, res) => {
  try {
    user.username = ''
    user.fullname = ''
    user.password = ''
    console.log(user)
    // user = { username: '', fullname: '' }

    return res.send('true')
  } catch (error) {
    console.error('error: ', error)
    return res.send('false')
  }
})

router.post('/editar', (req, res) => {
  try {
    user.username = req.body.username
    user.fullname = req.body.fullname
    console.log('fullname', user.fullname)
    console.log('username', user.username)

    return res.send('true')
  } catch (error) {
    console.error('Error: ', error)
    return res.send('false')
  }
})

const blog = { titulo: '', historia: '', autor: '' }

router.post('/add', function (req, res) {
  try {
    blog.titulo = req.body.titulo
    blog.historia = req.body.historia
    blog.autor = req.body.autor
    console.log('titulo', blog.titulo)
    console.log('historia', blog.historia)
    console.log('autor', blog.autor)

    return res.send('true')
  } catch (error) {
    console.log('Error: ', error)
    return res.send('false')
  }
})

router.post('/delete', function (req, res) {
  try {
    blog.titulo = req.body.titulo
    console.log('Post Eliminado', postDelete)

    this.posts = this.posts.filter(post => {
      console.log('post iteración', post.titulo)
      if (postDelete !== post.titulo) {
        return true
      }
    })

    console.table(this.posts)

    localStorage.setItem('blog', JSON.stringify(this.posts))

    // localStorage.removeItem("posts", JSON.stringify(this.posts));
    return true
  } catch (error) {
    console.log('Error: ', error)
    return false
  }
})



app.use(router)

// start server
app.listen(3000, function () {
  console.log('Server runnig on opprt 3000')
})

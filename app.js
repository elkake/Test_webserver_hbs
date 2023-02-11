import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'
import dotenv from 'dotenv'

dotenv.config()

const dir = dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT
const app = express()

// handlebars
// herramienta de vista, hbs, busca los hbs para renderizarlo
app.set('view engine', 'hbs')
// señalo que las partes del codigo del archivo principal, se encuentran en la carpeta partials
hbs.registerPartials(dir + '/views/partials')

// // servir contenido estatico, ejemplo html
app.use(express.static('public'))

//esto no se ejecuta porque estamois usando el middleware static
app.get('/', (req, res) => {
  res.render('home', { nombre: 'Gianfranco Marquez', titulo: 'curso de Node' })
})

app.get('/elements', (req, res) => {
  res.render('elements')
})

app.get('/generic', (req, res) => {
  res.render('generic')
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(port)
console.log('server levantado')

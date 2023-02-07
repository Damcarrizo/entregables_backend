//importar dependencias//
import express  from "express";
import ProductManager from './api/productos.js'

//instanciar nuestras constantes//
let productos = new ProductManager();

const app = express();

app.use(express.static('public'))

const router = express.Router();

//creamos rutas//
app.use('/api',router)

router.use(express.json())
router.use(express.urlencoded({extended: true}));

router.get('/productos',(req,res)=>{
    res.json(productos.listarAll())
})

router.get('/productos/listar/:id', (req,res)=>{
    let{id}= req.params
    res.json(productos.listar(id))
})

router.post('/productos/guardar', (req,res)=>{
    let producto = req.body
    productos.guardar(producto)
    res.json(producto)
})

router.put('/productos/actualizar/:id', (req,res)=>{
    let {id} = req.params
    let producto = req.body
    productos.actualizar(producto,id)
    res.json(producto)
})

router.delete('/productos/borrar/:id', (req,res)=>{
    let{id} = req.params
    let producto = productos.borrar(id)
    res.json(producto)
})

// configurar servidor//

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en el puerto:${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
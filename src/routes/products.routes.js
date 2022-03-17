import Router from "express"
//si tengo especificado el "type": "module" en el package.json, es necesario especificar la extension de archivo en cada import
import { getProducts, createNewProduct } from "../controllers/products.controller.js" 


const  router = Router() //exportar la variable de Router

//ruta para traer los productos 
router.get('/products', getProducts)

//ruta para traer los productos por id
router.get('/products')

//ruta para enviar productos
router.post('/products', createNewProduct)

//ruta para eliminar productos
router.delete('/products')

//ruta para actualizar productos
router.put('/products')


export default router
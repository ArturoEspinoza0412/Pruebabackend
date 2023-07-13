import { Request, Response, Router } from "express";
import ProductController from './controllers/controladora.producto';

const rutaProductos = Router();
const controldeProductos = new ProductController

rutaProductos.post('/register', async (req: Request, res: Response) => { 
    const body = req.body
    try{
        const response = await controldeProductos.createProduct(body)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})

rutaProductos.get('/consultCategory', async( req: Request, res: Response)=>{
    const value: any =req.query.category
    try{
        const response = await controldeProductos.readProductByCategory(value)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})
rutaProductos.get('/consultName', async( req: Request, res: Response)=>{
    const value: any =req.query.category
    try{
        const response = await controldeProductos.readProductByName(value)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})
module.exports = Router
import { Router, Request, Response } from "express";
import ProductModel from "../models/product";

const productRouter = Router();

productRouter.get('/products', async (req: Request, res: Response) => {

    try {
        const products = await ProductModel.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }    
});

productRouter.post('/product', async (req: Request, res: Response) => {
      try {
        const product = new ProductModel(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

productRouter.get('/product/:id', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

productRouter.put('/product/:id', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

productRouter.post('/product/:id/picture', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.body.id);
        product.image = req.body.image;
        await product.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


export default productRouter;
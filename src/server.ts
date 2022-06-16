import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import { ProductModel } from './models/product';



const app = express();
const port = process.env.PORT || 3006;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});  

app.get('/products', async (req: Request, res: Response) => {

    try {
        const products = await ProductModel.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }    
});

app.post('/product', async (req: Request, res: Response) => {
      try {
        const product = new ProductModel(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/product/:id', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/product/:id', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/product/:id/picture', async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.body.id);
        product.image = req.body.image;
        await product.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


const start = async () : Promise<void> => {
    try{
        await mongoose.connect(process.env.MONGOdb_URI || 'mongodb://localhost/ts-node-starter');
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }catch(err){
        console.log("Oops! something wen wrong!",err);
    }
}

void start();
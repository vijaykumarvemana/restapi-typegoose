import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import { ProductModel } from './models/product';
import productRouter from './services/product';
import userRouter from './services/user';




const app = express();
const port = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});  



app.use("/users",userRouter)
app.use("/products",productRouter)


console.table(listEndpoints(app));


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
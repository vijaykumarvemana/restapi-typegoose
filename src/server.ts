import express, {Request, Response} from 'express';
import mongoose from 'mongoose';



const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});     


const start = async () : Promise<void> => {
    try{
        await mongoose.connect('mongodb+srv://lineapp:lineapp@cluster0.ra7s2.mongodb.net/QuantumEchoDB?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
        app.listen(3006, () => console.log(`Server started on port 3006`));
    }catch(err){
        console.log("Oops! something wen wrong!",err);
    }
}

void start();
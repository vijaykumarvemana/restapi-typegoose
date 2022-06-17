import { Request, Response, Router } from "express";
import UserModel from "../models/user";


const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}
);


userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
);


userRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}   
);


userRouter.put("/:id", async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
);




export default userRouter;


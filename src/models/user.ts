import { prop, getModelForClass, ModelOptions, Ref, index, modelOptions} from '@typegoose/typegoose';


@ModelOptions ({ schemaOptions: { collection: 'users', timestamps: true } })
export class User {
    
        @prop({ type: () => String, required: true })
        public firstName!: string;

        @prop({ type: () => String, required: true })
        public lastName!: string;

        @prop({ type: () => String, required: true })
        public email!: string;

        @prop({ type: () => String, required: true })
        public password!: string;

       
}

const UserModel = getModelForClass(User);
export default UserModel;
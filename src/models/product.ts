import { prop, getModelForClass, ModelOptions, Ref, index, modelOptions} from '@typegoose/typegoose';

enum ProductCategory {
    Food = 'Food',
    Drink = 'Drink',
    Other = 'Other'
}



@modelOptions({ schemaOptions: { collection: 'products', timestamps: true } })
export class Product {

    @prop({ type: () => String, required: true })
    public name!: string;

    @prop({ type: () => String, required: true })
    public description!: string;

    @prop({ type: () => Number, required: true })
    public price!: number;

    @prop({ type: () => String, required: true })
    public image!: string;

    @prop({ type: () => String, enum: Object.values(ProductCategory), required: true })
    public category!: string;

}


export const ProductModel = getModelForClass(Product);

export default ProductModel;

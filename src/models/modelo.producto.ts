import mongoose,  { Schema } from "mongoose";


const esquemaProducto: Schema = new Schema ({
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ['electronic', 'grocery_store'] }
}, { collection: 'products' })

export default mongoose.model('Product', esquemaProducto)
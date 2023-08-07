import mongoose from "mongoose"

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        temps1: {
            type: Number,
            required: true,
            default : 0
        },
        temps2: {
            type: Number,
            required: true,
            default : 0
        },
        img: {
            type: String,
            required: true
        },
    }
)

const Product = mongoose.model('Product',productSchema);
export default Product;
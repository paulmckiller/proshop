import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true},
    rating: { type: Number, required: true},
    comment: { type: String, required: true},
},{timestamps: true})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        isRequired: true,
        ref: 'User'
    },
    name: {
        type: String,
        isRequired: true
    },
    image: {
        type: String,
        isRequired: true
    },
    brand: {
        type: String,
        isRequired: true
    },
    category: {
        type: String,
        isRequired: true
    },
    description: {
        type: String,
        isRequired: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        isRequired: true,
        default: 0
    },
    numReviews: {
        type: Number,
        isRequired: true,
        default: 0
    },
    price: {
        type: Number,
        isRequired: true,
        default: 0
    },
    countInStock: {
        type: Number,
        isRequired: true,
        default: 0
    },
}, { timestamps: true, }
);

const Product = mongoose.Model('Product', productSchema);

export default Product;
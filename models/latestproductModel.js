import mongoose from "mongoose";

const latestProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productNumber: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    },
    selectedOptions: {
        type: Array,
        required: false,
    },

    quantity: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },


}, { timestamps: true })

export default mongoose.model('LatestProducts', latestProductSchema)
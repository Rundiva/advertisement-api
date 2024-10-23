import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    brand: { type: String, required: true },
    bio: { type: String, required: true },
    logo: { type: String, required: false }
}, {
    timestamps: true
});

export const CategoryModel = model('Category', categorySchema)
import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const advertSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'Category' },
    price: { type: String, required: true },
    user: { type: Types.ObjectId, required: true, ref: 'Advert' }
}, {
    timestamps: true
})

advertSchema.plugin(toJSON);

export const AdvertModel = model("Advert", advertSchema)
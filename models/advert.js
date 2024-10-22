import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import { required } from "joi";

const advertSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: Types.ObjectId, required: true, ref: "Adverts" }
}, {
    timestamps: true
})

advertSchema.plugin(toJSON);

export const AdvertModel = model("Adverts", advertSchema)
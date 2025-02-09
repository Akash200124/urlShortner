import mongoose, {Schema} from "mongoose";

const urlSchema = new Schema({
    longurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export const Url = mongoose.model('Url', urlSchema);
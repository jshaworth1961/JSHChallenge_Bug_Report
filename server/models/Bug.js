import mongoose from "mongoose"
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Bug = new Schema(
    {
        closed: { type: Boolean, required: true, default: false },
        description: { type: String, required: true },
        title: { type: String, required: true },
        reportedBy: { type: String, required: true },
        closedDate: { type: Date }
    },

    { timestamps: true, toJSON: { virtuals: true } }

);

export default Bug;
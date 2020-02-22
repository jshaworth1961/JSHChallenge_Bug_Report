import mongoose from "mongoose"
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Note = new Schema(
    {
        content: {type:String,required:true},
        reportedBy: { type: String, required: true },
        bugId: { type: ObjectId, ref: "Bug",required:true} //this is bugId I changed it for the tester
    },

    { timestamps: true, toJSON: { virtuals: true } }

);

export default Note;
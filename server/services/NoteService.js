import mongoose from "mongoose";
import Note from "../models/Note";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Note", Note);
class NoteService {
    async getAll() {
        // let data = await _repository.find({});
        // return data
        return await _repository.find({}).populate("bug", "reportedBy");
    }




    async findById(id) {
        return await _repository.findById(id).populate("bug", "reportedBy");
    }

    async getNotesByBugId(id) {

        return await _repository.find({ bugId: id }).populate("bugId", "reportedBy");
    }

    async create(rawData) {
        return await _repository.create(rawData);
    }

    async update(id, update) {
        //NOTE {new: true} insures I get the object back after the change
        return await _repository.findByIdAndUpdate(id, update, { new: true });
    }

    async delete(id) {
        await _repository.findByIdAndDelete(id);
    }

    async deleteNoteFromBugId(id, noteId) {
        await _repository.findByIdAndDelete(noteId)


        //@ts-ignore


    }
}

const noteService = new NoteService();
export default noteService;


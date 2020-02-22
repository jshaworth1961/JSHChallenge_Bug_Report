import mongoose from "mongoose";
import Bug from "../models/Bug";

//NOTE the repository is the connection to your DB at that collection
const _repository = mongoose.model("Bug", Bug);
class BugService {
    async getAll() {
        // let data = await _repository.find({});
        // return data
        return await _repository.find({});
    }


    async findById(id) {
        return await _repository.findById(id);
    }
    async create(rawData) {
        return await _repository.create(rawData);
    }

    async update(id, update) {
        //NOTE {new: true} insures I get the object back after the change

        let bug = await _repository.findById(id);
        if(bug.closed === false)
        {
            return await _repository.findByIdAndUpdate(id, update, { new: true });
        }
        else
        {
            return "The bug case file has been closed. It cannot be edited or deleted";
        }

    }

    async delete(id) {
        await _repository.findByIdAndDelete(id);
    }
}

const bugService = new BugService();
export default bugService;


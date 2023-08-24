import mongoose from "mongoose";
 // validation scheme ki jo frontend se aa rha hai vo sahi ya glt
const FileSchema = new mongoose.Schema({// object leta hai
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('file', FileSchema); // file is collection nam

export default File;
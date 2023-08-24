import File from '../models/file.js';
import dotenv from 'dotenv';

dotenv.config();
// databse mai vvalues ko save krna hai 
export const uploadImage = async (request, response) => { // as a call back fn
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj); // file ka path aa jae gya isse 
        response.status(200).json({ path: `https://backend-4ss4.onrender.com/file/${file._id}`});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId); // mongodb mai kuch find krna ho toh findById
        
        file.downloadCount++; //kitne bar download ho rha hai

        await file.save(); // store krene k liye 

        response.download(file.path, file.name); // file ko download k liye
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}

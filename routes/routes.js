import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router(); // express k andr fn hota hai router k nm se


router.post('/upload', upload.single('file'), uploadImage); // post is api jo upload k nm  se hai
router.get('/file/:fileId', getImage);

export default router;
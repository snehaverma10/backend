import multer from 'multer';
 // with the help  of multer we make middleware
const upload = multer({ dest: 'uploads' })


export default upload;
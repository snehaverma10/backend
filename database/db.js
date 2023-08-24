import mongoose from "mongoose";
import dotenv from 'dotenv';
// databse call 
dotenv.config();
// db connection is a third party  have  to do exception handling
const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://snehaverma13675:sneha1234@cluster0.yebl8ir.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });// {} ia s object
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
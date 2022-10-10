import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DATABASE = "mongodb+srv://asset:2020@cluster0.gyolndd.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(fileUpload({}))
app.use('/api',router)
app.use(express.static('static'))

async function startApp(){
    try {
        await mongoose.connect(DATABASE);
        app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

startApp();
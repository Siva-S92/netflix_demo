import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from '../utils/database.js';
import { userRouter } from '../routes/userRoute.js';


//config the env variables
dotenv.config();

//server setup
const app = express();
const PORT = process.env.PORT;

//using middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const cors_options = {
    origin: process.env.CLIENT_URL,
    credentials: true
}
app.use(cors(cors_options));

//database Connection
databaseConnection();


//routes
app.use("/api/user", userRouter );





//Listern Server
app.listen(PORT, ()=> {
    console.log("server running on the PORT:", PORT)
})

export { app };
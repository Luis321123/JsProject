import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import router from './routes'

const app = express();


app.use(cors({
    credentials: true,

}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
 
const server = http.createServer(app);

server.listen(8080, () =>{
    console.log("listenting port https://localhost:8080");
});
//conection to te db
const MONGO_URL = "mongodb+srv://louis123:louis123@cluster0.88dww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise = Promise; 
mongoose.connect(MONGO_URL); 
mongoose.connection.on('error',(error: Error) => console.log(error));

app.use('/', router());
require('dotenv').config();
const express = require('express');
const pacientRouter = require('./routes/pacientRouter')
const userRouter = require('./routes/userRouter')
const datasetRouter = require('./routes/datasetRouter')
const authenticateToken = require('./auth/authMiddleware')
const mongoose = require('mongoose')

const app = express()



mongoose.connect(process.env.MONGO_URI).catch((err)=>{console.log(err);});
const db = mongoose.connection;

app.use('/user',express.json() ,userRouter);
app.use('/pacient',express.json() ,pacientRouter);
app.use('/dataset',express.json() , datasetRouter);//app.use('/dataset',express.json() ,authenticateToken, datasetRouter);

db.once('open',()=>{console.log("Connected to MongoDb");});
app.listen(process.env.PORT, ()=>console.log("Server running on port " + process.env.PORT));
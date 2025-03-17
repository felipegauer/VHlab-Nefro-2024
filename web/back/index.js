require('dotenv').config();
const express = require('express');
const pacientRouter = require('./routes/pacientRouter')
const infoRouter = require('./routes/infoRouter')
const userRouter = require('./routes/userRouter')
const datasetRouter = require('./routes/datasetRouter')
const authenticateToken = require('./auth/authMiddleware')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()

app.use(cors({ origin: 'https://vhlab-nefro.netlify.app', credentials: true }));


mongoose.connect(process.env.MONGO_URI).catch((err)=>{console.log(err);});
const db = mongoose.connection;

app.use('/api/user',express.json() ,userRouter);
app.use('/api/pacient',express.json() ,authenticateToken,pacientRouter);
app.use('/api/info',express.json() ,infoRouter);
app.use('/api/dataset',express.json(), authenticateToken , datasetRouter);//app.use('/dataset',express.json() ,authenticateToken, datasetRouter);

db.once('open',()=>{console.log("Connected to MongoDb");});
app.listen(process.env.PORT, ()=>console.log("Server running on port " + process.env.PORT));
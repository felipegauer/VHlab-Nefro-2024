require('dotenv').config();
const express = require('express');
const pacientRouter = require('./routes/pacientRouter')
const infoRouter = require('./routes/infoRouter')
const userRouter = require('./routes/userRouter')
const datasetRouter = require('./routes/datasetRouter')
const authenticateToken = require('./auth/authMiddleware')
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path')

const app = express()

app.use(cors());
// app.use(cors({
//     origin: '*', // Domínio do frontend
//     allowedHeaders: ['Content-Type', 'Authorization', 'authorization-token'], // Permite headers personalizados
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
//   }));


mongoose.connect(process.env.MONGO_URI).catch((err)=>{console.log(err);});
const db = mongoose.connection;
app.use(express.static(path.join(__dirname, './public')))

app.use('/api/user',express.json() ,userRouter);
app.use('/api/pacient',express.json() ,authenticateToken,pacientRouter);
app.use('/api/info',express.json() ,infoRouter);
app.use('/api/dataset',express.json(), authenticateToken , datasetRouter);//app.use('/dataset',express.json() ,authenticateToken, datasetRouter);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

db.once('open',()=>{console.log("Connected to MongoDb");});
app.listen(process.env.PORT, ()=>console.log("Server running on port " + process.env.PORT));
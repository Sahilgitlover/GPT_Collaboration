import express from 'express'
import dotenv from "dotenv";
import connectDB from './db/dbConnect';

dotenv.config()

const app = express()

connectDB()

app.get('/',(req,res)=>{
    res.send('Server running successfully')
})

app.listen(process.env.PORT,()=>{
    console.log(`Running on {http://localhost:${process.env.PORT}}`)
})
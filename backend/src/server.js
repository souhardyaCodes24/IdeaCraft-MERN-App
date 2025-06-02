import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config()
// changing the type in packacge.json to module

const app=express() 
const PORT = process.env.PORT ||5001

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json()) // this middleware allows to get access to req.body and access title and parameters in controller

app.use("/api/notes",notesRoutes)


connectDB().then(()=>{
    app.listen(5001,()=>{
    console.log("server starter on ",PORT)
})


})


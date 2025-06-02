import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from 'cors'
import path from 'path'
dotenv.config()
// changing the type in packacge.json to module

const app=express() 
const PORT = process.env.PORT ||5001
const __dirname=path.resolve()


if(process.env.NODE_ENV=="production"){

app.use(cors({
    origin:"http://localhost:5173"
}))
}
app.use(express.json()) // this middleware allows to get access to req.body and access title and parameters in controller

app.use("/api/notes",notesRoutes)

if(process.env.NODE_ENV=="production"){

    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",()=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

    })
}
connectDB().then(()=>{
    app.listen(5001,()=>{
    console.log("server starter on ",PORT)
})


})


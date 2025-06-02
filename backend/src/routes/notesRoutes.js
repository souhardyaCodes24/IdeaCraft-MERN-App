import express from "express"
import { createNotes, deleteNotes, getAllNotes, updateNotes ,getNodeById} from "../controllers/notesController.js"


const router=express.Router()

router.get("/",getAllNotes)


router.get("/:id",getNodeById)

router.post("/",createNotes)


router.put("/:id",updateNotes)


router.delete("/:id",deleteNotes)

export default router;



// listening for get requst and handlng it
// app.get("/api/notes",(req,res)=>{
//     // delete a note                     
//     res.status(200).send("you got 9 notes")

// })
// app.post("/api/notes",(req,res)=>{
//     // delete a note                     
//     res.status(201 ).json({message:"post created successfully"})

// })

// app.put("/api/notes/:id",(req,res)=>{
//     // delete a note                     
//     res.status(200 ).json({message:"post updated  successfully"})

// })
// app.delete("/api/notes/:id",(req,res)=>{
//     // delete a note                     
//     res.status(200 ).json({message:"post deleted successfully"})

// })


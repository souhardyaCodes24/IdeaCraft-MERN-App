import Note from "../../models/Note.js"

export async function getAllNotes(req,res){
                
     try {
          const notes =await Note.find().sort({createdAt:-1}) //sort to getlatest one first
          res.status(200).json(notes)

     } catch (error) {
          console.log("errorin getalll",error)
          res.status(500).json({message:"internal server error"})
     }
    //res.status(200).send("you got 69 notes")

}

export async function createNotes(req,res){
     try {
          const {title,content}=req.body

          const newNote =new Note({title:title,content:content})

          const savedNote= await newNote.save()

          res.status(201).json(savedNote)


     } catch (error) {
          console.log("errorin createNote",error)
          res.status(500).json({message:"internal server error"})
          
     }
                
     // res.status(201 ).json({message:"post created successfully"})


}

export async function updateNotes(req,res){

     try {
         const {title,content}= req.body

        const updatedNote =await Note.findByIdAndUpdate(req.params.id,{title:title,content:content},{new:true})
           

      // if invalidid

      if (!updatedNote){
          return res.status(404).json({message:"Note not found"})
      }
         res.status(200).json(updatedNote)
     } catch (error) {
          console.log("error in updateNote",error)
          res.status(500).json({message:"internal server error"})
          
     }
                    
    // res.status(200 ).json({message:"post updated  successfully"})


}

export async function deleteNotes(req,res){
                      
     try {


        const deletedNote =await Note.findByIdAndDelete(req.params.id)

        if(!deletedNote) return res.status(404).json({message:"Note not found"})

        res.status(200).json({message:"Note deleted  successfully"})
          
     } catch (error) {
          console.log("error in deleteNote",error)
          res.status(500).json({message:"internal server error"})
          
     }
     //res.status(200 ).json({message:"post deleted successfully"})

}

export async function getNodeById(req,res){
                      
     try {
          const specificNote =await Note.find({_id:req.params.id})
          res.status(200).json(specificNote)

        
          
     } catch (error) {
          console.log("error in getNodeById",error)
          res.status(500).json({message:"internal server error"})
          
     }
     

}

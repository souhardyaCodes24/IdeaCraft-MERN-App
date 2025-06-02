import mongoose  from "mongoose";

// create a schema
// you would create a amodel based off of that schema

const noteSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type: String,
        required : true
    }

},
{timestamps:true} // createdAT ,updatedAT fields
)

const Note = mongoose.model("Note",noteSchema)

export default Note;
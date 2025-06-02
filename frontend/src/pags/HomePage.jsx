import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
import toast from "react-hot-toast"
import NoteCard from "../components/NoteCard"
import api from "../lb/axios"
import NotesNotFound from "../components/NotesNotFound"
function HomePage() {

    const [notes,setNotes] =useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const fetchNotes = async ()=>{
            try {
                const res = await api.get("/notes")

       
                setNotes(res.data)
                console.log(res.data)
                setLoading(false)
            } catch (error) {
                console.log("ERROR ",error)
                toast.error("failed to load")
                setLoading(false)
            }
        }

        fetchNotes()
    },[])

  return (
    <div className="min -h screen">
        <Navbar/>

        <div className="max-w-7xl mx-auto mt-6">

            {loading && <div className="text-center font-bold text-primary p-10">Loading Notes...</div>}
           

            {notes.length==0 && <NotesNotFound/>}
            {
            notes.length>0 && 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note)=>{
                        
                       return <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                    })}
                   
                </div>
            }
        </div>

    </div>
  )
}

export default HomePage
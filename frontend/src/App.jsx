import './output.css'
import { Routes,Route } from 'react-router'
import HomePage from './pags/HomePage.jsx'
import CreatePage from './pags/CreatePage.jsx'
import NoteDetailPage from './pags/NoteDetailPage.jsx'
import toast from 'react-hot-toast'

function App() {
  return (
    <div className='relative h-full w-full'>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>

      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_80%,#63e_100%)]'/>
    </div>
  )
}

export default App
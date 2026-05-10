import React from 'react'
import Header from '../../components/header/Header'
import NoteCard from '../../components/card/NoteCard'
import AddNote from '../../components/addNotes/AddNote'
import { useState } from 'react'

const Dashboard = () => {

    const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

            
      {showPopup && (
        <AddNote onClose={() => setShowPopup(false)} />
      )}

      <div className="px-6 py-8 max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Hello, <span className="text-blue-400">Om Tiwari</span> 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your notes efficiently and stay organized.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          
          <h2 className="text-2xl font-semibold text-zinc-100">
            My Notes
          </h2>

          <button onClick={() => setShowPopup(true)} className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold transition duration-300 shadow-lg">
            + Add Note
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <NoteCard
            title="React Notes"
            desc="This contains important React concepts and interview questions."
            link="https://react.dev"
          />

          <NoteCard
            title="Backend API"
            desc="Node.js and Express API structure with authentication."
            link="https://expressjs.com"
          />

          <NoteCard
            title="MongoDB Guide"
            desc="Learn MongoDB schema design and CRUD operations."
            link="https://mongodb.com"
          />

        </div>
      </div>
    </div>  
  )
}

export default Dashboard
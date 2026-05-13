import React from "react";
import Header from "../../components/header/Header";
import NoteCard from "../../components/card/NoteCard";
import AddNote from "../../components/addNotes/AddNote";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all notes
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/notes");
      const data = await response.json();
      setNotes(data.notes || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notes:", error);
      setLoading(false);
    }
  };

  const handleEdit = (note) => {
    setEditNote(note);
    setIsOpen(true);
  };

  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/notes/${noteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setNotes(notes.filter((note) => note._id !== noteId));
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleNoteUpdate = () => {
    fetchNotes();
    setIsOpen(false);
    setEditNote(null);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      {showPopup && <AddNote onClose={() => setShowPopup(false)} onSuccess={fetchNotes} />}

      {isOpen && (
        <AddNote
          onClose={() => {
            setIsOpen(false);
            setEditNote(null);
          }}
          note={editNote}
          onSuccess={handleNoteUpdate}
        />
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
          <h2 className="text-2xl font-semibold text-zinc-100">My Notes</h2>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            + Add Note
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-zinc-400">Loading notes...</p>
          ) : notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard
                key={note._id}
                title={note.title}
                desc={note.desc}
                link={note.link}
                note={note}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-zinc-400">No notes yet. Click "+ Add Note" to create one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

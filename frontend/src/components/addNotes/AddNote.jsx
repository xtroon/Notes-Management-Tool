import React, { useState } from 'react'

const AddNote = ({ onClose, note, onSuccess }) => {
  const [title, setTitle] = useState(note?.title || "")
  const [desc, setDesc] = useState(note?.desc || "")
  const [link, setLink] = useState(note?.link || "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const noteData = { title, desc, link }

      const token = localStorage.getItem("token");
      let response
      if (note?._id) {
        // Update existing note
        response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/notes/${note._id}`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(noteData),
        })
      } else {
        // Create new note
        response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/notes`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(noteData),
        })
      }

      if (response.ok) {
        onSuccess()
        onClose()
      } else {
        setError("Failed to save note")
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">
          {note ? "Edit Note" : "Add New Note"}
        </h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              required
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500 text-sm sm:text-base transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Description</label>
            <textarea
              rows="4"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write your note description"
              required
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500 resize-none text-sm sm:text-base transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Link (Optional)</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500 text-sm sm:text-base transition-colors"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold transition duration-300 text-sm sm:text-base order-1 sm:order-2"
            >
              {loading ? "Saving..." : note ? "Save Changes" : "Add Note"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:flex-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white py-3 rounded-xl font-semibold transition duration-300 text-sm sm:text-base order-2 sm:order-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNote

import React from 'react'

const AddNote =  ({ onClose })  => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
        
        <h2 className="text-2xl font-bold text-white mb-6">
          Add New Note
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter note title"
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Write your note description"
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Link
            </label>

            <input
              type="text"
              placeholder="https://example.com"
              className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            
            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Add Note
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-xl font-semibold transition duration-300"
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

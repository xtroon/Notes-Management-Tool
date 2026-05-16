import React from 'react'

const NoteCard = ({ title, desc, link, note, handleEdit, handleDelete }) => {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 break-words">{title}</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 break-words">{desc}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 text-sm break-all mb-4 inline-block"
          >
            {link}
          </a>
        )}
      </div>

      <div className="flex gap-3 mt-auto pt-4 border-t border-zinc-800/50">
        <button 
          onClick={() => handleEdit(note)} 
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2.5 rounded-xl transition text-sm sm:text-base border border-zinc-700"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(note._id)} 
          className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold py-2.5 rounded-xl transition text-sm sm:text-base border border-red-500/20"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard

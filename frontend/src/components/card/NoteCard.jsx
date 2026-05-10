import React from 'react'

const NoteCard = (props) => {
  return (
    <div className="max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-3"> { props.title }</h2>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4" >{props.desc} </p>
      <a className="text-blue-400 hover:text-blue-300 text-sm break-all">{props.link}</a>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-xl transition">Edit</button>
        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition">Delete</button>
      </div>

    </div>
  )
}

export default NoteCard

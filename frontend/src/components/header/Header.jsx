import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between shadow-md">
      
      <h1 className="text-2xl font-bold text-white tracking-wide">
        Notes Management
      </h1>

      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-xl transition duration-300">
        Logout
      </button>
      
    </header>
  )
}

export default Header

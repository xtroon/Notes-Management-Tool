import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-4 flex items-center justify-between shadow-md">
      
      <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide truncate pr-2">
        Notes Management
      </h1>

      <button 
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-xl transition duration-300 text-sm sm:text-base shrink-0"
      >
        Logout
      </button>
      
    </header>
  )
}

export default Header

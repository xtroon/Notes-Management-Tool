import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
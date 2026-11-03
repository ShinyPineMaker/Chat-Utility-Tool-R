import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./Pages/Messages";
import Login from "./Pages/Login";
import Notepad from "./Pages/Notepad";
import Queries from "./Pages/Queries";





function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Notepad" element={<Notepad />} />
        <Route path="/Queries" element={<Queries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

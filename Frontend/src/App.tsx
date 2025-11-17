import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Landing"
import Ai_tools from "./pages/AI-tools"
import Dashboard from "./pages/Dashboard"
import Marketplace from "./pages/Marketplce"
import Profile from "./pages/profile"
import Navigation from "./Containers/Navigation"

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/marketplace" element={<Marketplace/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/aitools" element={<Ai_tools/>}/>
    <Route path="/profile" element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

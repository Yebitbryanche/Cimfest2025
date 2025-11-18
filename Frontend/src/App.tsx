import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Landing"
import Ai_tools from "./pages/AI-tools"
import Dashboard from "./pages/Dashboard"
import Marketplace from "./pages/Marketplce"
import Profile from "./pages/profile"
import Navigation from "./Containers/Navigation"
import Footer from "./Containers/Footer"
import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"
import UploadBeats from "./pages/UploadBeats.tsx"
import AIBeatMaker from "./pages/AIBeatMaker/index.tsx"
import CreateSong from "./pages/CreateSong/index.tsx"

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
    <Route path="/uploadbeats" element={<UploadBeats/>}/>
    <Route path="/aibeatmaker" element={<AIBeatMaker/>}/>
    <Route path="/createsong" element={<CreateSong/>}/>
    <Route path="/auth/signin" element={<SignIn/>}/>
    <Route path="/auth/signup" element={<SignUp/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App

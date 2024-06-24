import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Beranda from './pages/Beranda'
import TentangKami from './pages/TentangKami'
import Informasi from './pages/Informasi'
import Konsultasi from './pages/konsultasi'
import DetailProfile1 from './pages/DetailProfile1' // Import halaman Chat
import DetailProfile2 from './pages/DetailProfile2'
import DetailProfile3 from './pages/DetailProfile3'
import Chat1 from './pages/Chat1'
import Chat2 from './pages/Chat2'
import Chat3 from './pages/Chat3'
import Klik1 from './pages/Klik1'
import Klik2 from './pages/Klik2'
import Klik3 from './pages/Klik3'
import Klik4 from './pages/Klik4'
import Klik5 from './pages/Klik5'
import Klik6 from './pages/Klik6'
import Klik7 from './pages/Klik7'
import Klik8 from './pages/Klik8'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Klik9 from './pages/Klik9'
import Profil from './pages/Profil'
import Video1 from './pages/Video1'
import Video2 from './pages/Video2'
import Video3 from './pages/Video3'
import Video4 from './pages/Video4'
import Video5 from './pages/Video5'
import Video6 from './pages/Video6'
import Video7 from './pages/Video7'
import Video8 from './pages/Video8'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/" element={<Home />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/Detail-Profile/1" element={<DetailProfile1 />} />
        <Route path="/Detail-Profile/2" element={<DetailProfile2 />} />
        <Route path="/Detail-Profile/3" element={<DetailProfile3 />} />
        <Route path="chat1" element={<Chat1/>} />
        <Route path="chat2" element={<Chat2/>} />
        <Route path="chat3" element={<Chat3/>} />
        <Route path="/klik1" element={<Klik1/>} />
        <Route path="/klik2" element={<Klik2/>} />
        <Route path="/klik3" element={<Klik3/>} />
        <Route path="/klik4" element={<Klik4/>} />
        <Route path="/klik5" element={<Klik5/>} />
        <Route path="/klik6" element={<Klik6/>} />
        <Route path="/klik7" element={<Klik7/>} />
        <Route path="/klik8" element={<Klik8/>} />
        <Route path="/klik9" element={<Klik9/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/video1" element={<Video1/>} />
        <Route path="/video2" element={<Video2/>} />
        <Route path="/video3" element={<Video3/>} />
        <Route path="/video4" element={<Video4/>} />
        <Route path="/video5" element={<Video5/>} />
        <Route path="/video6" element={<Video6/>} />
        <Route path="/video7" element={<Video7/>} />
        <Route path="/video8" element={<Video8/>} />
      </Routes>
    </Router>
  )
}

export default App
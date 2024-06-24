import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Profil.css'
import logoprofil from '../images/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profil() {
  const [nama, setNama] = useState("Yogi Ernanda")
  const [email, setEmail] = useState("Yogi@gmail.com")
  const [phone, setPhone] = useState("081234567890")
  const [password, setPassword] = useState("")
  const [modalMessage, setModalMessage] = useState("")
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleEditProfile = () => {
    console.log("Profile updated:", { nama, email, phone, password });
    setModalMessage("Profil berhasil diperbarui.");
    setShowModal(true);
  }


  const handleSaveProfile = () => {
    console.log("Profile saved:", { nama, email, phone, password });
    setModalMessage("Profil berhasil disimpan.");
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <Navbar />
      <div className="profil-container">
        <div className="profil-header">
          <img src={logoprofil} alt="Profile" className="profil-image" />
          <div className="profil-details">
            <h2>Pengaturan akun</h2>
            <form>
              <div className="form-group">
                <label className="size-label">Nama:</label>
                <input className="size-input"
                  type="text" 
                  value={nama} 
                  onChange={(e) => setNama(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label className="size-label">Email:</label>
                <input className="size-input"
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label className="size-label">Nomor Telepon:</label>
                <input className="size-input"
                  type="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label className="size-label">Password:</label>
                <input className="size-input"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </form>
            <button className="tbl-button save-button" onClick={handleSaveProfile}>Save</button>
          </div>
        </div>
        <div className="profil-footer">
          <button className="tbl-button edit-button" onClick={handleEditProfile}>Edit</button>
        </div>
      </div>
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Profil;

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import profile2 from '../images/Profile-pakar2.png'
import '../styles/DetailProfile.css'

function DetailProfile2() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
    <section id="Detail-Profile">
            <div className="kolom-chat">
                <div className="image-text-chat">
                <img src={profile2} alt="Detail-Profile" className="Detail-Profile" />
                <div className="profile-content">
                <h7>Muhammad Noor</h7>
                <p>Temukan solusi anda dengan konsultasi bersama para pakar tanaman hias</p>
                <div className="divider"></div>
                <p className="boldP">Rp.10.000 - Rp.15.000</p>
                <h5 className="colorDiskon">*Diskon 10% sampai dengan akhir bulan*</h5>
                <div className="divider"></div>
                <p><Link to="/chat2" className="tbl-mulaichat">Mulai Chat</Link></p>
            </div>
            </div>
            </div>
        </section>
        <section>
        <div className="biografi">
                <h1>Biografi</h1>
                <p>Muhammad Noor, dulunya bekerja sebagai nelayan berpengalaman dengan usahanya, sambil membudidayakan ikan air laut di Tambak untuk dikonsumsi. Keberhasilannya tidak hanya terletak pada bisnisnya yang sukses, tetapi juga pada cara ia menginspirasi orang untuk menciptakan kebahagiaan melalui keindahan alam di sekitarnya.</p>
            </div>
        </section>
    </div>
    <Footer />
    </>
  )    
}

export default DetailProfile2

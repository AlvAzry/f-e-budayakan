import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Footer from '../components/Footer'
import konsultasi1 from '../images/gambar-konsultasi.png'
import '../styles/Konsultasi.css'
import pakar1 from '../images/gambar-pakar1.png'
import pakar2 from '../images/gambar-pakar2.png'
import pakar3 from '../images/gambar-pakar3.png'
import { Link } from 'react-router-dom'
import React, { useRef } from 'react';

function Konsultasi() {
  const kataPembatasRef = useRef(null);
  const kolom5Ref = useRef(null);

  const handleMulaiSekarangClick = () => {
    // Scroll to kata-pembatas section
    kataPembatasRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <Navbar />
    <div className='wrapper'>
        <section id="konsultasi">
            <div className="kolom">
              <div className="text-content-konsultasi">
                <h2>Ikan Peliharaan mu punya masalah ?</h2>
                <p>Temukan solusi terkait permasalahan anda dalam merawat Ikan hias dengan para ahlinya, selain itu anda juga bisa bertanya tentang apapun seputar Ikan Konsumsi.</p>
                <p><a href="#kata-pembatas" onClick={handleMulaiSekarangClick} className="tbl-pink">Mulai sekarang</a></p>
              </div>
              <img src={konsultasi1} alt="image-home1" />
            </div>
        </section>
        <section id="kata-pembatas">
        <div className="kata-pembatas">
                <h3 className="pembatash3">Rekomendasi Pakar</h3>
                <p>Pilih pakar sesuai kebutuhan anda</p>
            </div>
        </section>
        
      <section id="intro3">
      <div className="kolom5">
        <img src={pakar1} alt="image-home1" />
        <h5>Budi Gunawan</h5>
        <h6 className="colorh6">Ahli Ikan Air Tawar</h6>
        <div className="price-chat">
          <p>Rp.10.000</p>
          <p><Link to="/Detail-Profile/1" className="tbl-hijau">Chat</Link></p>
        </div>
      </div>
      <div className="kolom5">
        <img src={pakar2} alt="image-home1" />
        <h5>Muhammad Noor</h5>
        <h6 className="colorh6">Ahli Budidaya Ikan Laut</h6>
        <div className="price-chat">
          <p>Rp.10.000</p>
          <p><Link to="/Detail-Profile/2" className="tbl-hijau">Chat</Link></p>
        </div>
      </div>
      <div className="kolom5">
        <img src={pakar3} alt="image-home1" />
        <h5>Dodi</h5>
        <h6 className="colorh6">Ahli Budidaya Ikan Laut</h6>
        <div className="price-chat">
          <p>Rp.10.000</p>
          <p><Link to="/Detail-Profile/3" className="tbl-hijau">Chat</Link></p>
        </div>
      </div>
    </section>

    </div>
    <Footer />
    </>
  );
}

export default Konsultasi

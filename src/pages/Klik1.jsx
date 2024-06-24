import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import tips1 from "../images/tips1.png"
import '../styles/Klik.css'
import lele from "../images/bahan-lele.png"

function Klik1() {
    return (
        <>
          <Navbar />
          <div>
            <section className="wrap">
              <div className="kolom-tips">
                <div className="content-tips">
                  <h8 className="custom-h8">Ikan Lele</h8>
                  <img src={tips1} alt="image-home1" className="tips-image" />
                </div>
              </div>
            </section>

            <section className="wrapper">
              <div className="bahan">
                <h4 className="custom-h4">Bahan yang diperlukan</h4>
                <div className="bahan-container">
                  <div className="bahan1">
                    <ul>
                      <li>Kolam atau Tangki</li>
                      <li>Sumber Air</li>
                      <li>Pakan</li>
                      <li>Sistem Aerasi</li>
                    </ul>
                  </div>
                  <img src={lele} alt="image-home1" className="bahan-image" />
                </div>
              </div>
            </section>

            <section className="wrapper">
              <div className="bahan">
                <h4 className="custom-h4">Tips & Trik</h4>
                <div className="bahan-container">
                  <div className="bahan1">
                    <ol>
                      <li>Pemilihan Kolam atau Tangki: Pastikan memilih kolam atau tangki yang cukup untuk pertumbuhan ikan yang optimal.</li>
                      <li>Pengelolaan Kualitas Air: Perhatikan kualitas air dengan menjaga kebersihan kolam dan memastikan tingkat oksigen yang cukup.</li>
                      <li>Pemberian Pakan: Berikan pakan secara teratur dan sesuai dengan kebutuhan ikan, hindari overfeeding yang dapat mencemari air.</li>
                      <li>Pemantauan Kesehatan: Perhatikan tanda-tanda penyakit pada ikan dan tangani dengan segera.</li>
                      <li>Penanganan Limbah: Atur sistem pembuangan limbah dengan baik agar tidak mencemari lingkungan sekitar.</li>
                      <li>Pengendalian Predator: Pasang perlindungan seperti jaring atau penutup untuk mencegah serangan predator.</li>
                      <li>Panen: Lakukan panen secara hati-hati dan sesuai dengan ukuran ikan yang diinginkan.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            
          </div>
          <Footer />
        </>
      )
}

export default Klik1

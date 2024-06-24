import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../styles/Klik.css'
import tips5 from "../images/tips5.png"
import nila from "../images/bahan-nila.png"

function Klik5() {
  return (
    <>
      <Navbar />
      <div>
        <section className="wrap">
          <div className="kolom-tips">
            <div className="content-tips">
              <h8 className="custom-h8">Ikan Nila</h8>
              <img src={tips5} alt="image-home1" className="tips-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Bahan yang diperlukan</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ul>
                  <li>Kolam atau Wadah</li>
                  <li>Air</li>
                  <li>Pakan</li>
                  <li>Perlengkapan Fitur</li>
                </ul>
              </div>
              <img src={nila} alt="image-home1" className="bahan-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Tips & Trik</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ol>
                  <li>Pemilihan Lokasi: Pilih lokasi yang strategis dan stabil untuk pembangunan kolam budidaya ikan nila.</li>
                  <li>Pengaturan Lingkungan: Atur lingkungan kolam sesuai dengan kebutuhan ikan nila, termasuk suhu, pH, dan ketersediaan oksigen.</li>
                  <li>Kualitas Air: Monitor kualitas air secara rutin dan lakukan pemeliharaan untuk menjaga kejernihan dan kebersihan air.</li>
                  <li>Pemberian Pakan: Berikan pakan yang seimbang dan sesuai dengan kebutuhan ikan nila untuk pertumbuhan yang optimal.</li>
                  <li>Pemantauan Kesehatan: Perhatikan tanda-tanda penyakit pada ikan nila dan tangani dengan cepat jika diperlukan.</li>
                  <li>Perlindungan dari Predator: Pasang penutup atau jaring untuk mencegah serangan predator dan menjaga keamanan ikan.</li>
                  <li>Pemeliharaan Rutin: Lakukan pemeliharaan rutin seperti pergantian air secara berkala dan pembersihan kolam untuk menjaga kesehatan ikan.</li>
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

export default Klik5

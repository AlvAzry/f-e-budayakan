import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../styles/Klik.css'
import tips3 from "../images/tips3.png"
import gurame from "../images/bahan-gurame.png"

function Klik3() {
  return (
    <>
      <Navbar />
      <div>
        <section className="wrap">
          <div className="kolom-tips">
            <div className="content-tips">
              <h8 className="custom-h8">Ikan Gurame</h8>
              <img src={tips3} alt="image-home1" className="tips-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Bahan yang diperlukan</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ul>
                  <li>Kolam</li>
                  <li>Filter</li>
                  <li>Pompa</li>
                  <li>Pakan</li>
                  <li>Sumber Air</li>
                </ul>
              </div>
              <img src={gurame} alt="image-home1" className="bahan-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Tips & Trik</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ol>
                  <li>Pilih Kolam yang Cocok: Kolam dengan ukuran yang memadai untuk pertumbuhan gurame.</li>
                  <li>Jaga Kualitas Air: Bersihkan kolam dan filter secara teratur untuk menghindari pencemaran air.</li>
                  <li>Beri Pakan dengan Bijak: Berikan pakan yang sesuai dengan kebutuhan gurame, hindari overfeeding.</li>
                  <li>Pemantauan Kesehatan: Amati kesehatan gurame secara berkala, tangani penyakit dengan cepat.</li>
                  <li>Lindungi dari Predator: Pasang perlindungan seperti jaring untuk mencegah serangan predator.</li>
                  <li>Kelola Limbah: Atur pembuangan limbah dengan baik untuk menjaga kualitas air.</li>
                  <li>Penataan Lingkungan: Rancang lingkungan kolam yang sesuai dengan kebutuhan gurame untuk pertumbuhan yang optimal.</li>
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

export default Klik3

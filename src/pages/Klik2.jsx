import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../styles/Klik.css'
import tips2 from "../images/tips2.png"
import koi from "../images/bahan-koi.png"

function Klik2() {
  return (
    <>
      <Navbar />
      <div>
        <section className="wrap">
          <div className="kolom-tips">
            <div className="content-tips">
              <h8 className="custom-h8">Ikan Koi</h8>
              <img src={tips2} alt="image-home1" className="tips-image" />
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
                  <li>Dekorasi</li>
                  <li>Sumber Air</li>
                </ul>
              </div>
              <img src={koi} alt="image-home1" className="bahan-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Tips & Trik</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ol>
                  <li>Pilih Kolam yang Sesuai: Kolam minimal 1,5 meter dalam.</li>
                  <li>Jaga Kualitas Air: Tes dan bersihkan filter secara berkala.</li>
                  <li>Beri Pakan Berkualitas: Hindari overfeeding untuk menjaga kualitas air.</li>
                  <li>Pemantauan Kesehatan: Perhatikan tanda-tanda penyakit dan tangani dengan cepat.</li>
                  <li>Lindungi dari Predator: Pasang jaring atau penutup.</li>
                  <li>Kelola Limbah: Hindari pencemaran air dengan penanganan limbah yang baik.</li>
                  <li>Penataan Lanskap: Rencanakan tata ruang yang nyaman untuk ikan Koi.</li>
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

export default Klik2

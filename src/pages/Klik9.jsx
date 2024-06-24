import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../styles/Klik.css'
import tips9 from "../images/tips9.png"
import molly from "../images/bahan-molly.png"

function Klik9() {
  return (
    <>
      <Navbar />
      <div>
        <section className="wrap">
          <div className="kolom-tips">
            <div className="content-tips">
              <h8 className="custom-h8">Ikan Molly</h8>
              <img src={tips9} alt="image-home1" className="tips-image" />
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
                  <li>Sistem Filtrasi</li>
                  <li>Dekorasi</li>
                </ul>
              </div>
              <img src={molly} alt="image-home1" className="bahan-image" />
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="bahan">
            <h4 className="custom-h4">Tips & Trik</h4>
            <div className="bahan-container">
              <div className="bahan1">
                <ol>
                  <li>Lokasi Kolam: Pilih lokasi yang strategis dan stabil untuk membangun kolam budidaya ikan molly, hindari tempat yang terkena sinar matahari langsung secara berlebihan. Tempat yang teduh dan terlindungi lebih baik.</li>
                  <li>Pengaturan Lingkungan: Atur lingkungan kolam dengan baik, termasuk penyediaan tempat persembunyian seperti tanaman air dan ruang terbuka yang cukup bagi ikan molly. Pastikan ada banyak tempat untuk bersembunyi terutama bagi ikan betina yang sedang mengandung.</li>
                  <li>Kualitas Air: Monitor kualitas air secara rutin dan lakukan penggantian air secara berkala untuk menjaga kejernihan dan kebersihan air. Ikan molly membutuhkan air yang sedikit basa dengan pH antara 7.5 hingga 8.5.</li>
                  <li>Pemberian Pakan: Berikan pakan yang seimbang dan variasi dalam jenis makanan untuk memenuhi kebutuhan nutrisi ikan molly. Pakan berupa serpihan, pelet kecil, dan makanan hidup seperti cacing sutra sangat baik untuk pertumbuhan mereka.</li>
                  <li>Pemantauan Kesehatan: Amati perilaku dan kondisi fisik ikan molly secara teratur untuk mendeteksi tanda-tanda penyakit atau stres. Ikan molly yang sehat akan aktif berenang dan memiliki warna yang cerah.</li>
                  <li>Perlindungan dari Predator: Pasang penutup atau jaring untuk mencegah masuknya predator dan menjaga keamanan ikan molly, terutama jika kolam berada di luar ruangan.</li>
                  <li>Pemeliharaan Rutin: Lakukan pemeliharaan rutin seperti pembersihan filter dan perawatan taman kolam untuk menjaga kesehatan ikan. Ganti air sebagian secara berkala dan periksa alat filtrasi agar tetap berfungsi dengan baik.</li>
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

export default Klik9

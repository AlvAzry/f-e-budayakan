import '../styles/Beranda.css'
import Footer from '../components/Footer'
import gambar10 from '../images/Gambar10.png'
import gambar6 from '../images/Gambar6.png'
import gambar7 from '../images/Gambar7.png'
import gambar8 from '../images/Gambar8.png'
import gambar9 from '../images/Gambar9.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Beranda() {
  const query = useQuery()
  const searchQuery = query.get('query')

  // Lakukan sesuatu dengan searchQuery, seperti fetch data atau filter data
  console.log('Search query:', searchQuery)
    return (
    <>
    <Navbar />
    <div className="wrapper-container"></div>
      <div className='wrapper'>
        <section id="beranda">
            <div className="kolom">
                <h2>Ikan Air Tawar {searchQuery}</h2>
                <div className="image-text-container">
                <img src={gambar10} alt="beranda-gambar" className="beranda-gambar" />
                <div className="text-content">
                <p>Budidaya ikan air tawar semakin berkembang dengan adanya peningkatan fasilitas dan sarana yang memadai, termasuk peralatan perikanan, pakan, obat-obatan, serta teknik budidaya yang lebih canggih, dan pemasaran yang lebih efektif. Dalam lingkup kegiatan budidaya, pengendalian pertumbuhan dan mortalitas ikan sangat penting. Pertumbuhan ikan, yang merupakan peningkatan berat atau panjang dalam periode tertentu, dipengaruhi oleh banyak faktor, baik internal maupun eksternal, yang dapat dikendalikan dan sulit dikendalikan. </p>
                <p>Faktor internal meliputi usia, jenis kelamin, faktor genetik, parasit, dan penyakit, sementara faktor eksternal utama adalah pakan dan kualitas air. Kualitas air memegang peran sentral dalam budidaya perikanan, karena seluruh kehidupan biota yang dipelihara berada dalam air. Selain kejernihan dan kebebasan dari polusi, parameter fisika dan kimia air tertentu perlu dipertimbangkan dalam budidaya ikan air tawar, seperti suhu, pertukaran air, kedalaman, kekeruhan, oksigen terlarut, tingkat keasaman, dan kadar logam berat seperti merkuri. Oleh karena itu, pemantauan dan pemeliharaan kualitas air sangat penting untuk keberhasilan budidaya ikan air tawar. Produksi ikan air tawar terus berkembang secara eksponensial, didorong oleh ketersediaan ikan yang relatif terjangkau bagi masyarakatan.</p>
            </div>
            </div>
            <div className="text-content-below">
              <p>Hal ini bertujuan untuk menggantikan hasil tangkapan dan menyumbang ikan bagi konsumsi domestik dan internasional. Namun, pemacuan produksi perikanan budidaya, baik secara intensif maupun ekstensif, seringkali mengakibatkan peningkatan bahan organik dalam perairan, seperti sisa pakan dan feses. Kelebihan kapasitas perikanan budidaya, terutama di perairan daratan seperti waduk, sungai, dan danau, serta penggunaan pakan yang berlebihan atau berkualitas rendah, menjadi penyebab utama masalah ini. Akibatnya, kualitas perairan menurun karena eutrofikasi, yang mengakibatkan kekurangan oksigen dan peningkatan zat beracun seperti amoniak, serta meningkatkan risiko serangan penyakit pada ikan. Untuk mengatasi masalah ini, diperlukan penerapan budidaya ikan air tawar secara ramah lingkungan, yang mencakup proses pembesaran ikan hingga mencapai ukuran yang siap untuk dipasarkan.</p>
            </div>
            </div>
        </section>

        <section id="artikel">
        <div className="artikel">
                <h5>Baca Berita Lainnya</h5>
            </div>
        </section>

        <section id="intro4">
    <div className="kolom-informasi">
      <img src={gambar6} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2>Ikan Koi</h2>
        <p>Jenis ikan(Cyprinus rubrofuscus)yang mempunyai ornamen yang menarik dan jinak. Dianggap varian dari ikan mas (Cyprinus carpio) padahal secara genetik berbeda keduanya berbeda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik2" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar7} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2>Ikan Nila</h2>
        <p>Manfaatkan kesempatan untuk berbagi dan belajar dari sesama pecinta ikan melalui fitur Konsultasi. Anda dapat terlibat dalam diskusi langsung dengan para pakar ikan.</p>
        <p className="tbl-info-ikan"><Link to="/Klik5" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar8} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2>Ikan Gurame</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik3" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar9} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2>Ikan Molly</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik9" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
    </section>
      </div>
    <Footer />
    </>
    );
  }
  
  export default Beranda;
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import untitled from '../images/Untitled.png'
import '../styles/Informasi.css'
import informasi1 from '../images/gambar-informasi1.png'
import informasi2 from '../images/gambar-informasi2.png'
import informasi3 from '../images/gambar-informasi3.png'
import tips1 from '../images/gambar-tips1.png'
import tips2 from '../images/gambar-tips2.png'
import tips3 from '../images/gambar-tips3.png'
import tips4 from '../images/gambar-tips4.png'
import tips5 from '../images/gambar-tips5.png'
import tips6 from '../images/gambar-tips6.png'
import tips7 from '../images/gambar-tips7.png'
import tips8 from '../images/gambar-tips8.png'
import Video1 from '../images/video1.png'
import Video2 from '../images/video2.png'
import Video3 from '../images/video3.png'
import Video4 from '../images/video4.png'
import Video5 from '../images/video5.png'
import Video6 from '../images/video6.png'
import Video7 from '../images/video7.png'
import Video8 from '../images/video8.png'
import { Link } from 'react-router-dom'

function Informasi() {
  return (
    <>
    <Navbar />
    <div className="wrapper-container"></div>
    <div className="wrapper">
      <section id="informasi">
        <div className="kolom">
            <div className="text-content">
              <h2>Apa Itu Budidaya Ikan ?</h2>
              <p>Budidaya perikanan didefinisikan sebagai suatu kegiatan untuk memproduksi biota (organisme) akuatik secara terkontrol dalam rangka mendapatkan keuntungan (profit). Definisi budidaya perikanan lainnya adalah campur tangan (upaya-upaya) manusia untuk meningkatkan produktivitas perairan.</p>
            </div>
          </div>
          <div className="image-text-container">
            <img src={untitled} alt="informasi-gambar" className="informasi-gambar" />
        </div>
      </section>

      <section id="infromasi2">
        <div className="informasi2">
                <h4>Jenis Ikan</h4>
                <p>Berikut adalah jenis ikan untuk budidaya</p>
            </div>
        </section>

        <section id="intro">
      <div className="kolom-informasi">
      <img src={informasi1} alt="image-informasi" className="size-img-jenis" />
        <h4 className="sizeh4">Ikan Air Tawar</h4>
        <p className="rata-font">Ikan air tawar adalah jenis ikan yang hidup diair tawar dikolam, sungai, dan danau dengan salinitas air 0,05%. Sebanyak 41 persen dari jumlah spesies ikan diketahui hidup di air tawar. </p>
        
      </div>
      <div className="kolom-informasi">
      <img src={informasi2} alt="image-informasi" className="size-img-jenis" />
        <h4 className="sizeh4">Ikan Air Laut</h4>
        <p className="rata-font">Ikan laut atau Ikan air asin adalah spesies ikan yang hidup didalam air laut. Berbeda dengan ikan air tawar yang menghendaki lingkungan hidup dengan kadar garam yang lebih rendah daripada kadar garam dalam cairan tubuhnya.</p>
      </div>
      <div className="kolom-informasi">
      <img src={informasi3} alt="image-informasi" className="size-img-jenis" />
        <h4 className="sizeh4">Ikan Air Payau</h4>
        <p className="rata-font">Ikan air payau adalah ikan yang hidup di perairan yang memiliki kandungan garam lebih rendah daripada air laut, tetapi lebih tinggi daripada air tawar. Air payau biasanya ditemukan di muara sungai, laguna, atau estuari di mana air tawar dan air laut bertemu.</p>
      </div>
    </section>

    <section id="tips-trik">
        <div className="tips-trik">
          <h5>Tips&Trik</h5>
        </div>
    </section>

    <section id="intro4">
    <div className="kolom-video">
      <img src={tips1} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Lele</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik1" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips2} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Koi</h2>
        <p>Manfaatkan kesempatan untuk berbagi dan belajar dari sesama pecinta ikan melalui fitur Konsultasi. Anda dapat terlibat dalam diskusi langsung dengan para pakar ikan.</p>
        <p className="tbl-info-ikan"><Link to="/Klik2" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips3} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Gurame</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik3" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips4} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Patin</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik4" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
    </section>

    <section id="intro4">
      <div className="kolom-video">
      <img src={tips5} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Nila</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik5" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips6} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Mujair</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik6" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips7} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Bandeng</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik7" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
      <div className="kolom-video">
      <img src={tips8} alt="image-home4" className="size-img" />
      <div className="text-content-informasi">
        <h2 className="posisi">Ikan Cupang</h2>
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
        <p className="tbl-info-ikan"><Link to="/Klik8" className="tbl-info">Selengkapnya</Link></p>
      </div>
      </div>
    </section>

    <section id="tips-trik">
        <div className="tips-trik">
          <h5>Video Tutorial</h5>
        </div>
    </section>

{/* Video Tutorial */}
    <section id="intro4">
    <div className="kolom-video">
      <Link to="/video1"><img src={Video1} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Cara budidaya ikan nila menggunakan sistem bioflok secara lengkap</h9>
        <div className="sejajar-views">
        <p className="views-size">191rb views - 1 tahun yg lalu</p>
        <p className="views-size2">10.13 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video2"><img src={Video2} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Ternak lele 1000+ Kolam Panen 60 Ton Perbulan</h9>
        <div className="sejajar-views">
        <p className="views-size">873rb views - 1 tahun yg lalu</p>
        <p className="views-size2">12.19 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video3"><img src={Video3} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Budidaya Ikan Bawal Air Tawar Untuk Pemula -Budidaya Ikan</h9>
        <div className="sejajar-views">
        <p className="views-size">59rb views - 1 tahun yg lalu</p>
        <p className="views-size2">08.27 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video4"><img src={Video4} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Usaha Budidaya Ikan Air Tawar Menguntungkan Bagi Pemula</h9>
        <div className="sejajar-views">
        <p className="views-size">52rb views - 1 tahun yg lalu</p>
        <p className="views-size2">14.02 min</p>
        </div>
      </div>
      </div>
    </section>

    <section id="intro4">
    <div className="kolom-video">
    <Link to="/video5"><img src={Video5} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Yang perlu diketahui seputar budidaya ikan konsumsi</h9>
        <div className="sejajar-views">
        <p className="views-size">22rb views - 1 tahun yg lalu</p>
        <p className="views-size2">21.50 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video6"><img src={Video6} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">7 Cara Ternak Ikan Nila Untuk Pemula, Wajib Tahu Sebelum Budidaya Ikan</h9>
        <div className="sejajar-views">
        <p className="views-size">22rb views - 1 tahun yg lalu</p>
        <p className="views-size2">05.35 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video7"><img src={Video7} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">7 Cara Budidaya Ikan Air Tawar Kolam Terpal Bagi Pemula</h9>
        <div className="sejajar-views">
        <p className="views-size">22rb views - 1 tahun yg lalu</p>
        <p className="views-size2">21.50 min</p>
        </div>
      </div>
      </div>
      <div className="kolom-video">
      <Link to="/video8"><img src={Video8} alt="image-home4" className="size-img ukuran-gambar" /></Link>
      <div className="video-content">
        <h9 className="desk-size">Peluang Usaha Budidaya Ikan Air Tawar Menguntungkan Bagi Pemula</h9>
        <div className="sejajar-views">
        <p className="views-size">2,4jt views - 1 tahun yg lalu</p>
        <p className="views-size2">11.19 min</p>
        </div>
      </div>
      </div>
    </section>

    </div>
    <Footer />
    </>
  )
}

export default Informasi

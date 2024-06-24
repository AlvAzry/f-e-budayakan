import '../styles/TentangKami.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import laptop from '../images/Laptop.png'
import gambartentang1 from '../images/Gambartentang1.png'
import gambartentang2 from '../images/Gambartentang2.png'
import gambartentang3 from '../images/Gambartentang3.png'

function TentangKami() {
    return (
    <>
    <Navbar />
    <div className="wrapper-container"></div>
      <div className='wrapper'>
        <section id="tentangkami">
            <div className="kolom">
                <div className="image-text-container">
                <img src={laptop} alt="tentangkami-gambar" className="tentangkami-gambar" />
                <div className="text-content">
                <h2>Tentang Kami</h2>
                <p>Selamat datang di platform kami! Kami adalah suatu wahana digital yang informatif memberikan pengetahuan dan inspirasi seputar dunia ikan. Dengan komitmen kami untuk memudahkan para pecinta ikan dalam merawat dan menjaga keindahan mereka, kami menyajikan beragam fitur yang dirancang secara khusus untuk memenuhi kebutuhan dan keinginan ikan piaraan anda.</p>
            </div>
            </div>
            </div>
        </section>

        <section id="artikel5">
        <div className="artikel5">
                <h4>Layanan yang anda dapatkan</h4>
                <p>Lihat intruksi lebih lanjut</p>
            </div>
        </section>

      <section id="intro3">
      <div className="kolom1">
      <img src={gambartentang1} alt="image-home1" />
      <div className="text-content">
        <p>Kami menyajikan informasi bermanfaat melalui artikel, tips, video tutorial, dan panduan praktis yang mudah dimengerti.</p>
      </div>
      </div>
      <div className="kolom1">
      <img src={gambartentang2} alt="image-home1" />
      <div className="text-content">
        <p>Manfaatkan kesempatan untuk berbagi dan belajar dari sesama pecinta ikan melalui fitur Konsultasi. Anda dapat terlibat dalam diskusi langsung dengan para pakar ikan.</p>
      </div>
      </div>
      <div className="kolom1">
      <img src={gambartentang3} alt="image-home1" />
      <div className="text-content">
        <p>Kami memahami bahwa setiap ikan memiliki kebutuhan dan tantangan yang berbeda. Oleh karena itu, kami menyediakan layanan perawatan khusus untuk ikan Anda.</p>
      </div>
      </div>
    </section>
    
      </div>
    <Footer />
    </>
    );
}

export default TentangKami
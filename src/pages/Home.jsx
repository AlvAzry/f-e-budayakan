import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Footer from '../components/Footer'
import image1 from '../images/image-home1.png'
import gambar1 from '../images/Gambar1.png'
import gambar2 from '../images/Gambar2.png'
import gambar3 from '../images/Gambar3.png'
import gambar4 from '../images/Gambar4.png'
import gambar5 from '../images/Gambar5.png'
import gambar6 from '../images/Gambar6.png'
import gambar7 from '../images/Gambar7.png'
import gambar8 from '../images/Gambar8.png'
import gambar9 from '../images/Gambar9.png'


function Home() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
        <section id="home">
            <div className="kolom">
                <h2>Tumbuhkan Koleksi Ikanmu dengan Cinta dan Perhatian</h2>
                <p>Selamat datang di Dunia Budidaya Ikan, di mana setiap detik adalah petualangan baru dalam merawat kehidupan bawah air. Mari jelajahi, pelajari, dan bagi cinta terhadap dunia akuatik. Inilah tempatnya, di mana setiap gerakan sirip adalah awal dari perjalanan yang tak terlupakan.</p>
                <p><a href="" className="tbl-pink">Selengkapnya</a></p>
            </div>
            <img src={image1} alt="image-home1" />
        </section>

        <section id="kata-pembatas">
        <div className="kata-pembatas">
                <h3>Memulai Rencana dengan Tepat</h3>
                <p>Ikuti Instruksi untuk lebih lanjut</p>
            </div>
        </section>

        <section id="intro">
      <div className="kolom1">
      <img src={gambar1} alt="image-home1" />
        <h1 className="sizeh1">Kesehatan Ikan</h1>
        <p className="font-p">Perhatikan tanda-tanda penyakit pada ikan, seperti perubahan perilaku, warna, atau pola pernapasan yang tidak normal. Pisahkan ikan yang sakit untuk mencegah penyebaran penyakit.</p>
      </div>
      <div className="kolom1">
      <img src={gambar2} alt="image-home1" />
        <h1 className="sizeh1">Memberi Makan Ikan</h1>
        <p className="font-p">Beri pakan ikan berkualitas sesuai dengan jenisnya. Jangan memberi makan berlebihan atau kurang. Beri variasi makanan untuk memastikan ikan mendapatkan nutrisi yang cukup.</p>
      </div>
      <div className="kolom1">
      <img src={gambar3} alt="image-home1" />
        <h1 className="sizeh1">Menjaga Kualitas Air</h1>
        <p className="font-p">Pastikan air dalam akuarium bersih dan bebas kontaminan. Monitor parameter seperti suhu, pH, amonia, nitrit, dan nitrat secara teratur. Lakukan pergantian air rutin untuk menjaga kualitas air.</p>
      </div>
    </section>

    <section id="intro2">
        <img src={gambar4} alt="image-home1" className="img-home"/>
            <div className="kolom">
                <h1>Pastikan Nutrisi Ikan Anda Terpenuhi dengan Baik</h1>
                <br />
                <ol className="font-ol">
                    <li>Awasi ikan Anda untuk tanda-tanda kekurangan nutrisi, seperti warna pucat atau pertumbuhan terhambat.</li>
                    <li>Sebelum memberikan pakan tambahan, periksa kualitas air untuk memastikan kondisi yang tepat.</li>
                    <li>Pilih pakan yang sesuai dengan jenis ikan dan kebutuhan nutrisinya.</li>
                    <li>Tetapkan jadwal pemberian pakan yang konsisten untuk menjaga kesehatan dan pertumbuhan ikan.</li>
                    <li>Pastikan ikan mendapatkan air yang cukup bersih dan oksigen, karena nutrisi larut dalam air dan diserap oleh tubuh ikan.</li>
                </ol>
            </div>
        </section>

        <section id="home">
            <div className="kolom">
                <h1>Bergabunglah Bersama Kami dalam Budidaya Ikan Anda</h1>
                <br />
                <ol className="font-ol">
                    <li>Dapatkan informasi terbaru tentang tren budidaya ikan, teknik perawatan terbaru, dan inovasi dalam dunia budidaya ikan.</li>
                    <li>Berbagi pengalaman dan pengetahuan dengan anggota komunitas. Ajukan pertanyaan dan dapatkan jawaban dari sesama penghobi ikan.</li>
                    <li>Konsultasikan masalah dan tantangan dalam budidaya ikan Anda kepada para ahli di bidang ini.</li>
                </ol>
            </div>
            <img src={gambar5} alt="image-home1" className="img-home" />
        </section>

        <section id="artikel">
        <div className="artikel">
                <h5>Artikel</h5>
            </div>
        </section>

        <section id="intro4">
      <div className="kolom-informasi">
      <img src={gambar6} alt="image-home1" className="size-img" />
        <div className="text-content-informasi">
          <h2>Ikan Koi</h2>
          <p>Jenis ikan (Cyprinus rubrofuscus) yang mempunyai ornamen yang menarik dan jinak. Dianggap varian dari ikan mas (Cyprinus carpio) padahal secara genetik berbeda keduanya berbeda.</p>
        </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar7} alt="image-home1" className="size-img" />
        <div className="text-content-informasi">
        <h2>Ikan Nila</h2>
        <p>Ikan yang hidup di air tawar, memiliki tubuh berwarna kehitaman atau keabuan, dengan beberapa pita gelap melintang (belang) yang makin mengabur pada ikan dewasa.</p>
        </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar8} alt="image-home1" className="size-img" />
        <div className="text-content-informasi">
        <h2>Ikan Gurami</h2>
        <p>Berasal dari perairan daerah Sunda kemudian menyebar hingga ke perairan Malaysia, Thailand, Ceylon. Ikan ini merupakan keluarga dari Anabantidae.</p>
        </div>
      </div>
      <div className="kolom-informasi">
      <img src={gambar9} alt="image-home1" className="size-img" />
        <div className="text-content-informasi">
        <h2>Ikan Molly</h2>
        <p>Merupakan jenis ikan hias air tawar yang memiliki ukuran tubuh yang kecil maksimal 5-7 cm saat dewasa, memiliki bentuk tubuh yang menarik serta warnanya yang beragam.</p>
        </div>
      </div>
    </section>

        </div>
        <Footer />
    </>
  )
}

export default Home

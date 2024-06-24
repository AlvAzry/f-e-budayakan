import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import video1 from '../images/video1.png'
import '../styles/Video.css'
import rekomendasi1 from '../images/rekomendasi1.png'
import rekomendasi2 from '../images/rekomendasi2.png'
import rekomendasi3 from '../images/rekomendasi3.png'
import rekomendasi4 from '../images/rekomendasi4.png'

function Video1() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <section id="section-video">
          <div className="kolom-video-content">
            <div className="video-recommendation-container">
              <div className="shareds-box">
                <img src={video1} alt="tentangkami-gambar" className="tentangkami-gambar content-video1" />
                <div className="deskripsi-video-kolom">
                  <h1 className="jarak3">Cara budidaya ikan nila menggunakan sistem bioflok secara lengkap</h1>
                  <h3 className="colorh3">Jawwir farm</h3>
                  <div>
                    <p>Jawwir Farm karawang tempat jual beli bibit lele berkualitas, buat temen temen yang ingin beternak lele bisa datang kesini, nanti bisa di ajari ternak lele dari nol, bisa beli bibit lele kesini juga, atau hasil panen juga bisa dijual ke Jawwir farm</p>
                    <h3 className="size-jarak6">Lokasi :</h3>
                    <p className="jarak5">Jawwir Farm ( Jual beli Bibit Lele & Lele konsumsi ) <b/>https://maps.app.goo.gl/oDirSpF7183Dm...</p><br />
                    <p className="jarak4">Budidaya lele, ikan lele, RAHASIA BUDIDAYA LELE 40 HARI LANGSUNG PANEN, budidaya lele sistem bioflok, cara budidaya ikan lele, budidaya lele, ternak lele, panen lele, budidaya ikan lele kolam terpal, cara budidaya lele, budidaya ikan lele pemula, budidaya ikan lele di ember, cara budidaya ikan lele bagi pemula</p>
                  </div>
                </div>
              </div>
              <div className="shared-box text-content-video">
                <h2 className="rekomendasih2">- Rekomendasi video -----------------------------</h2>
                <div className="img-desk">
                  <img src={rekomendasi1} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size">KEGIATAN MINGGU PAGI SAMBIL CARI KERINGAT</h9>
                    <div className="desk-sejajar">
                      <p className="views-size jarak1">SEDULUR LANANGKU</p>
                      <p className="views-size">191rb views - 1 tahun yg lalu</p>
                    </div>
                  </div>
                </div>
                <div className="img-desk">
                  <img src={rekomendasi2} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size">KEGIATAN MINGGU PAGI SAMBIL CARI KERINGAT</h9>
                    <div className="desk-sejajar">
                    <p className="views-size jarak1">SEDULUR LANANGKU</p>
                      <p className="views-size">191rb views - 1 tahun yg lalu</p>
                    </div>
                  </div>
                </div>
                <div className="img-desk">
                  <img src={rekomendasi3} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size">KEGIATAN MINGGU PAGI SAMBIL CARI KERINGAT</h9>
                    <div className="desk-sejajar">
                    <p className="views-size jarak1">SEDULUR LANANGKU</p>
                      <p className="views-size">191rb views - 1 tahun yg lalu</p>
                    </div>
                  </div>
                </div>
                <div className="img-desk">
                  <img src={rekomendasi4} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size">KEGIATAN MINGGU PAGI SAMBIL CARI KERINGAT</h9>
                    <div className="desk-sejajar">
                    <p className="views-size jarak1">SEDULUR LANANGKU</p>
                      <p className="views-size">191rb views - 1 tahun yg lalu</p>
                    </div>
                  </div>
                </div>
                <h2 className="rekomendasih2">- Artikel ------------------------------------------------</h2>
                <div className="img-desk">
                  <img src={rekomendasi1} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size color-artikel">Peran budidaya ikan nila dalam rangka peningkatan pendapatan masyarakat di kabupaten klaten</h9>
                  </div>
                </div>
                <div className="img-desk">
                  <img src={rekomendasi1} alt="tentangkami-gambar" className="rekom-img"/>
                  <div className="img-deskripsi">
                    <h9 className="desk-size color-artikel">Peran budidaya ikan nila dalam rangka peningkatan pendapatan masyarakat di kabupaten klaten</h9>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Video1

import '../styles/Footer.css'
import fb from '../images/icon-fb.png'
import ig from '../images/icon-ig.png'
import tw from '../images/icon-tw.png'
import yt from '../images/icon-yt.png'

function Footer() {
  return (
    <div id="copyright">
        <div className="wrapper">
            <div className="contact-info">
                <h5>Budidaya Ikan</h5>
                <div className="sejajar">
                <p>No telp : 081234567890</p>
                <p>Email : budayakan@gmail.com</p>
                </div>
            </div>
            <div className="social-icons">
                <img src={fb} alt="icon-fb" style={{ width: '80px', height: '80px' }} />
                <img src={ig} alt="icon-ig" style={{ width: '80px', height: '80px' }} />
                <img src={tw} alt="icon-tw" style={{ width: '80px', height: '80px' }} />
                <img src={yt} alt="icon-yt" style={{ width: '80px', height: '80px' }} />
            </div>
            <div className="dividerr"></div>
            &copy; 2024 Budayakan
        </div>
    </div>
  )
}

export default Footer

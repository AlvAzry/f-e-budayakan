import '../styles/Login.css';
import login from '../images/login-gambar.png';
import logo from '../images/logo.png';
import google from '../images/logo-google.png';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructure form data
    const { nama, email, telepon, password } = formData;

    try {
      // Call your backend API using Axios
      const response = await axios.post('http://localhost:3000/register', {
        nama,
        email,
        telepon,
        password
      });

      console.log('Signup successful:', response.data);
      // Redirect to login page or handle success
      window.location.href = '/login'; 
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data.message : error.message);
    }
  }

  return (
    <>
      <div className="wrapper-login">
        <section className="login-section">
          <div className="login1">
            <img src={logo} alt="logo" className="logo-img" />
            <h3 className="size-daftar-akun">Daftar Akun Anda</h3>
            <div className="google-login">
              <img src={google} alt="Google logo" className="google-img" />
              <h3 className="size-daftar">Google</h3>
            </div>
            <div className="separator">
              <h3 className="size-daftar">Atau</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="size-form">Nama</label>
                <input type="text" id="name" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama anda" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="size-form">Alamat Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Masukkan alamat email" />
              </div>
              <div className="form-group">
                <label htmlFor="telepon" className="size-form">Nomor Telepon</label>
                <input type="text" id="telepon" name="telepon" value={formData.telepon} onChange={handleChange} placeholder="Masukkan nomor telepon" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="size-form">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Masukkan password" />
              </div>
              <div className="form-group">
                <button type="submit" className="signup-button">Daftar</button>
              </div>
            </form>
          </div>
          <div className="login2">
            <img src={login} alt="Login illustration" className="login2-img" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Signup;

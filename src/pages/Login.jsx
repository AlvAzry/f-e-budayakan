import React, { useState } from 'react';
import '../styles/Login.css';
import loginImage from '../images/login-gambar.png';
import logo from '../images/logo.png';
import googleLogo from '../images/logo-google.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      if (response.data.success) {
        alert('Login successful');
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        navigate('/'); // Redirect to Home page upon successful login
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed: terjadi kesalahan');
    }
  };

  return (
    <div className="wrapper-login">
      <section className="login-section">
        <div className="login1">
          <img src={logo} alt="logo" className="logo-img" />
          <h3 className="size-daftar-akun">Masuk Akun Anda</h3>
          <div className="google-login">
            <img src={googleLogo} alt="Google logo" className="google-img" />
            <h3 className="size-daftar">Google</h3>
          </div>
          <div className="separator">
            <h3 className="size-daftar">Atau</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="size-form">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama anda"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="size-form">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan alamat email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telepon" className="size-form">
                Nomor Telepon
              </label>
              <input
                type="text"
                id="telepon"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                placeholder="Masukkan nomor telepon"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="size-form">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="signup-button">
                Masuk
              </button>
            </div>
          </form>
          {/* Conditional rendering based on token existence */}
          {!localStorage.getItem('token') && (
            <p className="daftar-text">
              Belum ada akun? <Link to = '/signup'></Link>>
            </p>
          )}
        </div>
        <div className="login2">
          <img src={loginImage} alt="Login illustration" className="login2-img" />
        </div>
      </section>
    </div>
  );
}

export default Login;

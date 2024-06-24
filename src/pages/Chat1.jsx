import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Message from '../components/Message';
import '../styles/Chat.css';
import logo1Profile from '../images/logo1.png';
import logo2Profile from '../images/logo2.png';
import dodiProfile from '../images/logo3.png';

const Chat1 = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Yogi', text: 'Hallo pak', time: '10:30 AM', isReceived: false },
    { id: 2, sender: 'Budi Gunawan', text: 'Hey bg Yogi, ada yang bisa di bantu?', time: '10:35 AM', isReceived: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMsg = {
      id: messages.length + 1,
      sender: 'Yogi',
      text: newMessage,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }),
      isReceived: false,
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <>
      <Navbar />
      <div className='wrapper'>
      <div className="chat-container">
        <div className="chat-history">
          <h3>Riwayat Chat</h3>
          <ul className="history-list">
            <li className="history-item">
              <img src={logo1Profile} alt="Yogi" className="profile-image" />
              Budi Gunawan
            </li>
            <li className="history-item">
              <img src={logo2Profile} alt="Noor" className="profile-image" />
              Muhammad Noor
            </li>
            <li className="history-item">
              <img src={dodiProfile} alt="Dodi" className="profile-image" />
              Dodi
            </li>
          </ul>
        </div>
        <div className="message-list">
          {messages.map((msg) => (
            <Message
              key={msg.id}
              sender={msg.sender}
              text={msg.text}
              time={msg.time}
              isReceived={msg.isReceived}
            />
          ))}
          <form className="message-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={newMessage}
              onChange={handleChange}
              placeholder="Tulis pesan..."
            />
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Chat1;

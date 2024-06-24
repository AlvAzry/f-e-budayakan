import PropTypes from 'prop-types'
import '../styles/Message.css'

const Message = ({ sender, text, time, isReceived }) => {
  return (
    <div className={`message ${isReceived ? 'received' : ''}`}>
      <div className="message-content">
        <p className="message-text">{text}</p>
        <p className="message-time">{time}</p>
      </div>
      <p className="message-sender">{sender}</p>
    </div>
  )
}

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isReceived: PropTypes.bool.isRequired,
};

export default Message

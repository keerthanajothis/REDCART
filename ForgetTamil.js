import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phoneNumber) {
      setError('உங்கள் மின்னஞ்சல் அல்லது தொலைபேசி எண்ணை உள்ளிடவும்.');
    } else {
      setError('');
      if (email) {
        setMessage(`கடவுச்சொல் மீள்பதிவு மொழிபெயர்ச்சி மின்னஞ்சல் ${email} க்கு அனுப்பப்பட்டுள்ளது`);
        setEmail('');
      }
      if (phoneNumber) {
        if (phoneNumber.length !== 10) {
          setError('தொலைபேசி எண் எண்ணிக்கை 10 இருக்க வேண்டும்.');
        } else {
          setMessage(`OTP கோரிக்கை ${phoneNumber} க்கு அனுப்பப்பட்டுள்ளது`);
          setPhoneNumber('');
        }
      }
    }
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>கடவுச்சொல் மறந்ததற்கான முறைமை</h2>
            {error && <div className="error" style={{ color: 'white' }}>{error}</div>}
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="மின்னஞ்சல்"
              />
            </div>
            <div className="inputbox">
              <ion-icon name="call-outline"></ion-icon>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="தொலைபேசி எண்"
              />
            </div>
            <button type="submit">சமர்ப்பிக்க</button>
            <div className="login"><br></br>
              <p style={{ color: 'white' }}>உங்கள் கடவுச்சொல்லை நினைவில் வைத்திருக்கிறீர்களா? <Link to="/LoginTamil">உள்நுழைய</Link></p>
            </div>
          </form>
        </div>
      </div>
      {message && (
        <div className="message" style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
          {message}
        </div>
      )}
    </section>
  );
};

export default ForgetPassword;

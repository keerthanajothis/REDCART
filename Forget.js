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
      setError('Please enter your email or phone number.');
    } else {
      setError('');
      if (email) {
        setMessage(`Instructions for resetting password have been sent to ${email}`);
        setEmail('');
      }
      if (phoneNumber) {
        if (phoneNumber.length !== 10) {
          setError('Phone number must be exactly 10 digits.');
        } else {
          setMessage(`OTP request sent to ${phoneNumber}`);
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
            <h2>Forget Password</h2>
            {error && <div className="error" style={{ color: 'white' }}>{error}</div>}
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            <div className="inputbox">
              <ion-icon name="call-outline"></ion-icon>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
              />
            </div>
            <button type="submit">Submit</button>
            <div className="login"><br></br>
              <p color='white'>Remember your password? <Link to="/LoginForm">Log in</Link></p>
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

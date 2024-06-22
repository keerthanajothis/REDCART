import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = ({ handleSignIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!username.trim()) {
      errors.username = 'பயனர்பெயர் தேவை';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'மின்னஞ்சல் தவறானது';
    }
    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'கடவுச்சொல் குறைந்தது 6 எழுத்துக்களாக இருக்க வேண்டும்';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'கடவுச்சொல்கள் பொருந்தவில்லை';
    }

    if (Object.keys(errors).length === 0) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert(`பயனர்பெயர்: ${username}\nமின்னஞ்சல்: ${email}\nகடவுச்சொல்: ${password}\nகடவுச்சொல் உறுதிப்படுத்தவும்: ${confirmPassword}`);
      handleSignIn(email, password);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
      window.location.href = '/LoginForm';
    } else {
      setErrors(errors);
    }
  };

  return (
    <section lang="ta">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>பதிவு செய்ய</h2>
            <div className="inputbox">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="">பயனர்பெயர்</label>
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">மின்னஞ்சல்</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="">கடவுச்சொல்</label>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label htmlFor="">கடவுச்சொல் உறுதிப்படுத்தவும்:</label>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <button style={{padding:'10px',borderRadius:'10px',marginLeft:'10px'}} type='submit'>பதிவு செய்க</button>
           
            <div className="login">
              <p>ஏற்கனவே கணக்கெழுத்து உள்நுழைந்திருக்கிறீர்களா? <Link to="/LoginTamil">உள்நுழை</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;

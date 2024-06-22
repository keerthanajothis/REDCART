import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    alert(`உள்நுழைய வெற்றிகரமாகவும்!\nமின்னஞ்சல்: ${email}\nகடவுச்சொல்: ${password}`);
    window.location.href = '/InfoTamil'; // Redirect to the info page
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-value">
            <h2>உள்நுழைய</h2>
            <div className="inputbox">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="">மின்னஞ்சல்</label>
            </div>
            <div className="inputbox">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="">கடவுச்சொல்</label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> நினைவுகள் மறந்திருக்கின்றேன் <Link to="/ForgetTamil">மறந்துவிட்டேன்</Link>
              </label>
            </div>
            <br />
            <div>
              <button style={{padding:'10px',borderRadius:'10px',marginLeft:'10px'}}type="submit"><Link to='/InfoTamil'>உள்நுழைய</Link></button>
            </div>
            <br />
            <div className="register">
              <p>
                கணக்கை இல்லையா? <Link to="/SignupTamil">பதிவு செய்க</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

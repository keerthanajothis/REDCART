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
      errors.username = 'Username is required';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
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
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="inputbox">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="">Username</label>
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="">Password</label>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label htmlFor="">Confirm Password:</label>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <button style={{padding:'10px',borderRadius:'10px',marginLeft:'10px'}} type='submit'>Register</button>
           
            <div className="login">
              <p>Already have an account? <Link to="/LoginForm">Log in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
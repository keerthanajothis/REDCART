import React, { useState } from 'react';
import './Info.css'; 
import { Link } from 'react-router-dom';

function Info() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  const [townCity, setTownCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mobileNumber.length !== 10) {
      setError('Mobile Number is not valid');
    } else {
      setError('');
      console.log('Submitted:', { 
        fullName, 
        address, 
        pincode,
        mobileNumber,
        landmark,
        townCity,
        state
      });
    }
  };

  return (
    <div className='rohini'>
    <div className="personal-info-container">
      <h2>PERSONAL INFORMATION FORM</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="address">Address:</label>  
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            pattern="[0-9]{10}"
            title="Mobile Number should be exactly 10 digits"
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="landmark">Landmark:</label>
          <input
            type="text"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
        <div className="form-group2">
          <label htmlFor="townCity">Town/City:</label>
          <input
            type="text"
            id="townCity"
            value={townCity}
            onChange={(e) => setTownCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
          </select>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
        <center><p style={{color:'white'}}><Link to="/Front">GO</Link></p></center>
      </form>
    </div>
    </div>
  );
}

export default Info;
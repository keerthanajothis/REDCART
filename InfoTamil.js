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
      setError('மொபைல் எண் தவறானது');
    } else {
      setError('');
      console.log('சமர்ப்பிக்கப்பட்டது:', { 
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
      <h2>தனிப்பட்ட தகவல் படிவம்</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="fullName">முழு பெயர்:</label>
          <input type="text" id="fullName" value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="address">முகவரி:</label>  
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="pincode">பின்கோடு:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="mobileNumber">மொபைல் எண்:</label>
          <input type="text" id="mobileNumber" value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            pattern="[0-9]{10}"
            title="மொபைல் எண் 10 இருக்க வேண்டும்"
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="landmark">குறிச்சொல்:</label>
          <input
            type="text"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
        <div className="form-group2">
          <label htmlFor="townCity">நகரம்/மாநகரம்:</label>
          <input
            type="text"
            id="townCity"
            value={townCity}
            onChange={(e) => setTownCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="state">மாநிலம்:</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">மாநிலத்தைத் தேர்ந்தெடுக்கவும்</option>
            <option value="ஆந்திரா பிரதேசம்">ஆந்திரா பிரதேசம்</option>
            <option value="அருணாசலப்பிரதேசம்">அருணாசலப்பிரதேசம்</option>
            <option value="தமிழ்நாடு">தமிழ்நாடு</option>
            <option value="அஸ்ஸாம்">அஸ்ஸாம்</option>
            <option value="பிஹார்">பிஹார்</option>
            <option value="சட்டிஸ்கார்">சட்டிஸ்கார்</option>
            <option value="கோவா">கோவா</option>
            <option value="குஜராத்">குஜராத்</option>
            <option value="ஹரியானா">ஹரியானா</option>
            <option value="ஹிமாசல பிரதேசம்">ஹிமாசல பிரதேசம்</option>
            <option value="ஜார்கண்ட்">ஜார்கண்ட்</option>
          </select>
        </div>
        <div>
        <button type="submit">சமர்ப்பிக்க</button>
        </div>
        <center><p style={{color:'white'}}><Link to="/FrontTamil">தொடருக</Link></p></center>
      </form>
    </div>
    </div>
  );
}

export default Info;

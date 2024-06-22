
import React, { useState } from 'react';
import './Language.css';
import { Link } from 'react-router-dom';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleContinue = () => {
    // Handle continue button click
    console.log("Selected language:", selectedLanguage);
    // Add your logic for what to do next after selecting a language
  };

  return (
    <div>
      <div className="Lang-Language">
        <center><h1>Select Your Language</h1></center>
        
        <div>

          <div>
            
          <label>
            <input
              type="radio"
              value="தமிழ்"
              checked={selectedLanguage === 'தமிழ்'}
              onChange={handleLanguageChange}
            />
            தமிழ்
          </label>
         
          </div>
          <br></br>
           <div>
          
          <label>
            <input
              type="radio"
              value="English"
              checked={selectedLanguage === 'English'}
              onChange={handleLanguageChange}
            />
            English
          </label>
          
          </div>
          <br></br>
           <div>
          <label>
            <input
              type="radio"
              value="తెలుగు"
              checked={selectedLanguage === 'తెలుగు'}
              onChange={handleLanguageChange}
            />
            తెలుగు(Telugu)
          </label>
          </div>
          <br></br>
          <div>
          <label>
            <input
              type="radio"
              value="മലയാളം"
              checked={selectedLanguage === 'മലയാളം'}
              onChange={handleLanguageChange}
            />
           മലയാളം(Malayalam)
          </label>
          </div>
          <br></br>
          <div>
          <label>
            <input
              type="radio"
              value="বাংলা"
              checked={selectedLanguage === 'বাংলা'}
              onChange={handleLanguageChange}
            />
           বাংলা(Bengali)
          </label>
          </div>
          <br></br>
          <div>
          <label>
            <input
              type="radio"
              value="मराठी"
              checked={selectedLanguage === 'मराठी'}
              onChange={handleLanguageChange}
            />
          मराठी(Marathi)
          </label>
          </div>
          <br></br>
          <div>
          <label>
            <input
              type="radio"
              value="ಕನ್ನಡ"
              checked={selectedLanguage === 'ಕನ್ನಡ'}
              onChange={handleLanguageChange}
            />
           ಕನ್ನಡ(Kannada)
          </label>
          </div>
          <br></br>
          <div>
          <label>
            <input
              type="radio"
              value="ગુજરાતી"
              checked={selectedLanguage === 'ગુજરાતી'}
              onChange={handleLanguageChange}
            />
           ગુજરાતી(Gujarati)
          </label>
          </div>
          <br></br>   

        </div>

        <div>
          {selectedLanguage === 'தமிழ்' ? (
            <button className="btn-button"><Link to="/LoginTamil">Continue</Link></button>
          ) : (
            <button className="btn-button"><Link to="/LoginForm">Continue</Link></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Language;
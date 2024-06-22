        import React from 'react';
        
        import logo from './Introduction.png'; // Import your logo image
import { Link } from 'react-router-dom';

        const Introduction = () => {
        return (
            
            <div className="main">
            <div className="navbar">
               
                
               
            </div>
            <div className="content">
        <h1>RED<br /><span>CART</span> <br />Shopping</h1>
        <p className="par">Red Cart is your one-stop destination for all your shopping needs. <br /> From electronics to fashion, home decor to groceries, find everything you need right here.
          <br />  Shop conveniently and securely with Red Cart.</p>
        <button className="cn"><Link to='/Language'>JOIN US</Link></button>

                </div>
                </div>
        );
        };

        export default Introduction;

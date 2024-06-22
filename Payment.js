import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Pay = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    contact: '',
    paymentOption: '',
    price: '',
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    
    if (name === "expiryDate" || name === "cvv" || name === "price") {
      updatedValue = updatedValue.replace(/\D/g, '');
    }
    
    if (name === "expiryDate") {
      updatedValue = updatedValue.replace(/\D/g, '');
  
      if (updatedValue.length > 4) {
        updatedValue = updatedValue.substring(0, 4);
      }
  
      if (updatedValue.length > 2) {
        updatedValue = updatedValue.substring(0, 2) + '/' + updatedValue.substring(2);
      }
    }
    
    if (name === "cardNumber") {
      updatedValue = updatedValue.replace(/\D/g, '');
      updatedValue = updatedValue.replace(/(.{4})/g, '$1 ');
    }
    
    setFormData({ ...formData, [name]: updatedValue });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentOption === 'card' && formData.name && formData.cardNumber && formData.expiryDate && formData.cvv) {
      console.log(formData);
      setPaymentSuccess(true);
    } else if (formData.paymentOption !== 'card' && (formData.contact.includes('@') || formData.contact.length === 10)) {
      console.log(formData);
      setPaymentSuccess(true);
    } else {
      alert('Please enter all card details or a valid 10-digit mobile number or UPI ID');
    }
  };

  const renderCardFields = () => {
    return (
      <>
        <label style={styles.label}>
          Name on Card:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            style={styles.input}
            maxLength="19"
            required
          />
        </label>
        <div style={styles.inline}>
          <label style={styles.label}>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              style={{ ...styles.input, ...styles.smallInput }}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </label>
          <label style={styles.label}>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              style={{ ...styles.input, ...styles.smallInput }}
              maxLength="3"
              required
            />
          </label>
        </div>
        <label style={styles.label}>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
      </>
    );
  };

  const renderPaymentOptionFields = () => {
    if (formData.paymentOption === 'googlepay' || formData.paymentOption === 'phonepay' || formData.paymentOption === 'paytm') {
      return (
        <label style={styles.label}>
          Mobile Number or UPI ID:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            style={styles.input}
            maxLength="50"
            required
          />
        </label>
      );
    }
  };

  const renderPaymentOptionPriceField = () => {
    if (formData.paymentOption !== 'card') {
      return (
        <label style={styles.label}>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
      );
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Payment Information</h2>
        {paymentSuccess ? (
          <div style={styles.paymentSuccess}>
            <h3>Payment Successful!</h3>
            <p>Thank you for your purchase.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            {formData.paymentOption === 'card' && renderCardFields()}
            {renderPaymentOptionFields()}
            {renderPaymentOptionPriceField()}
            <label style={styles.label}>
            Payment Option:
            <select
              name="paymentOption"
              value={formData.paymentOption}
              onChange={handleInputChange}
              style={{ ...styles.input, backgroundImage: 'none' }}
              required
            >
              <option value="">Select Payment Option</option>
              <option value="card">&#128179; Card</option>
              <option value="googlepay">&#128722; Google Pay</option> 
              <option value="phonepay">&#128241; PhonePe</option>
              <option value="paytm">&#x20B9; Paytm</option>
            </select>
            </label>
            <button type="submit" style={styles.button}>
              Pay Now
            </button>
          </form>
        )}
        <Link to="/Front">Return</Link>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    width:'0px',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
   
    background: 'white',
    fontFamily: 'Roboto, sans-serif',
  },
  container: {
    Width: '100px',
    minWidth:'400px',
    marginRight:'1200px',
    padding: '20px',
    border: '10px solid #ccc',
    borderRadius: '20px',
    background: 'white',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  smallInput: {
    width: '100px',
    marginRight: '100px',
  },
  inline: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100%',
  },
  paymentSuccess: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '5px',
    fontSize: '1rem',
    width:'350px',
    height:'100px'
  },
};

export default Pay;

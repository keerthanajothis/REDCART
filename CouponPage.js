/*import React, { useState } from 'react';

const CouponPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const [originalAmount, setOriginalAmount] = useState(100); // Initial amount
  const [discountedAmount, setDiscountedAmount] = useState(100); // Initially set to the original amount

  const applyCoupon = () => {
    // Here you can add logic to check the validity of the coupon code
    // For simplicity, let's assume the coupon code "DISCOUNT30" reduces the original amount by 30%
    if (couponCode === 'DISCOUNT30') {
      const discount = originalAmount * 0.3; // 30% discount
      setDiscountedAmount(originalAmount - discount);
      alert('Coupon code applied successfully!');
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleChange = (event) => {
    setCouponCode(event.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{color:'black'}}>Coupon Page </h1>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Original Amount:</p>
        <p style={{ display: 'inline-block' }}>${originalAmount}</p>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Discounted Amount:</p>
        <p style={{ display: 'inline-block' }}>${discountedAmount}</p>
      </div>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button
        onClick={applyCoupon}
        style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponPage;*/


     
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CouponPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const [originalAmount, setOriginalAmount] = useState(100); // Initial amount
  const [discountedAmount, setDiscountedAmount] = useState(100); // Initially set to the original amount

  const applyCoupon = () => {
    // Here you can add logic to check the validity of the coupon code
    // For simplicity, let's assume the coupon code "DISCOUNT10" reduces the original amount by 10%
    if (couponCode === 'DISCOUNT30') {
      const discount = originalAmount * 0.3; // 10% discount
      setDiscountedAmount(originalAmount - discount);
      alert('Coupon code applied successfully!');
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleChange = (event) => {
    setCouponCode(event.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
      <h1>Coupon Page</h1>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Original Amount:</p>
        <p style={{ display: 'inline-block' }}>${originalAmount}</p>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Discounted Amount:</p>
        <p style={{ display: 'inline-block' }}>${discountedAmount}</p>
      </div>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button
        onClick={applyCoupon}
        style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Apply Coupon
      </button>
      <Link to="/">Go back to Vegetables Page</Link>
    </div>
  );
};

export default CouponPage;
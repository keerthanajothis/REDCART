import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const products = [
    { name: 'Luggage bags', price: '999', image: 'https://www.shutterstock.com/image-photo/luggage-consisting-large-suitcases-rucksacks-260nw-129213182.jpg', couponRequired: true },
    { name: 'School Bags', price: '574', image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/PN/DS/CG/113370877/55205-5-school-bag-free-clipart-hd.png' },
    { name: 'Gold jewel', price: '50000', image: 'https://t3.ftcdn.net/jpg/02/34/21/58/240_F_234215884_pAF9PoUM5xEAsqW8g2oXsFUPRnkuOA14.jpg', couponRequired: true },
    { name: 'Artistic Diamonds', price: '60000', image: 'https://t4.ftcdn.net/jpg/06/35/97/01/240_F_635970157_dXvdme8bVtVW00VHw7JJVfreCF3HXqlU.jpg' },
    { name: 'Fashion Bangles', price: '800', image: 'https://t3.ftcdn.net/jpg/05/25/54/06/240_F_525540629_QxKds12GbTjsbqv3WeMQTstCvpvgy6MC.jpg' },
    { name: 'SmartWatches', price: '3500', image: 'https://t4.ftcdn.net/jpg/02/44/17/39/240_F_244173933_QPbn77c2Tjy5A4XoOJWqxysJibBpDy3T.jpg', couponRequired: true },
    { name: 'Wallets', price: '450', image: 'https://t4.ftcdn.net/jpg/01/39/32/25/240_F_139322524_jFW4sl5d0NBiMHwSQ0vrrrQyGvRvvFzV.jpg' },
    { name: 'Umbrellas', price: '699', image: 'https://t3.ftcdn.net/jpg/06/18/51/94/240_F_618519434_Ese9nHq1HjSTqMJCF6Xgdd8ahel0UISh.jpg', couponRequired: true },
    { name: 'Travel Pillows', price: '301', image: 'https://t4.ftcdn.net/jpg/04/42/89/09/240_F_442890972_a4yppIGxZUgmL67RJyMaKZEYWpYGtZ2V.jpg' },
    { name: 'Causal Shoes', price: '1348', image: 'https://t4.ftcdn.net/jpg/05/32/10/29/240_F_532102968_dRuciqo2ApI2aG7rNwz02tChizGW09h7.jpg', couponRequired: true },
    { name: 'Travel Kits', price: '500', image: 'https://t3.ftcdn.net/jpg/04/11/59/40/240_F_411594000_w5BdtWVZ7z4pxGBg5sScjnJc5x2ApK7b.jpg' },
    { name: 'Skin Care', price: '2000', image: 'https://t4.ftcdn.net/jpg/06/05/39/51/240_F_605395171_sW5hkfnffnL6Z6ZpIC0OJZTjslUeRgiQ.jpg', couponRequired: true }

    ];

function Accs() {
    const [cart, setCart] = useState([]);
    const [couponCodes, setCouponCodes] = useState({});
    const [discountedProducts, setDiscountedProducts] = useState([]);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        setCart(updatedCart);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.map(item => item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    const isInCart = (product) => {
        return cart.some(item => item.name === product.name);
    };

    const applyCoupon = (product) => {
        setCouponCodes({ ...couponCodes, [product.name]: '' });
    };

    const handleApplyCoupon = (product) => {
        const couponCode = couponCodes[product.name];
        if (couponCode === 'DISCOUNT10') {
            const price = product.price;
            const discountedPrice = price - (price * 0.1); // Apply 10% discount
            setCouponCodes({ ...couponCodes, [product.name]: discountedPrice });
            setDiscountedProducts([...discountedProducts, product.name]);
            alert('Discount applied successfully!');
        } else {
            alert('Invalid coupon code!');
        }
    };

    const handleChange = (event, product) => {
        setCouponCodes({ ...couponCodes, [product.name]: event.target.value });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="page">
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'white' }}>ACCESSORIES</h2>

            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products.map(product => (
                    <div className="product-card" key={product.name} style={{ width: 'calc(25% - 20px)', marginBottom: '25px', maxHeight: '510px', overflow: 'hidden', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <div className="product-item" style={{ padding: '10px', textAlign: 'center' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <h2 style={{ color: 'white' }}>{product.name}</h2>
                            <p style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '5px' }}>
                                ₹{couponCodes[product.name] ? couponCodes[product.name] : product.price} INR*
                            </p>
                            <button onClick={() => addToCart(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                {isInCart(product) ? (
                                    <div>
                                        <span role="img" aria-label="Trolley">🛒</span> <span style={{ color: 'white' }}>{cart.find(item => item.name === product.name).quantity}</span>
                                    </div>
                                ) : (
                                    <span role="img" aria-label="Trolley">🛒</span>
                                )}
                            </button>
                            {!discountedProducts.includes(product.name) && (
                                <div>
                                    {isInCart(product) && <button onClick={() => removeFromCart(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>}
                                    {product.couponRequired && (
                                        <div>
                                            <button onClick={() => applyCoupon(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Apply Coupon</button>
                                            {couponCodes[product.name] !== undefined && (
                                                <div>
                                                    <input type="text" placeholder="Enter coupon code" value={couponCodes[product.name]} onChange={(e) => handleChange(e, product)} style={{ fontSize: '14px', padding: '5px', margin: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                                    <button onClick={() => handleApplyCoupon(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Apply</button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="page">
                <h2 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>Cart</h2>
                <div className="cart-items" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {cart.map(item => (
                        <div key={item.name} className="cart-item" style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            <div style={{ marginLeft: '10px', color: 'white' }}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                            <div>
                                <button onClick={() => removeFromCart(item)} style={{ margin: '5px' }}>-</button>
                                <span style={{ color: 'white' }}>{item.quantity}</span>
                                <button onClick={() => addToCart(item)} style={{ margin: '5px' }}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 style={{ textAlign: 'center', color: 'white' }}>Total Price: ₹{getTotalPrice()}</h3>
                    <Link to="/Product2"style={{color:'white',marginRight:'1000px'}}>NEXT</Link>
                    <center><Link to="/Payment"style={{color:'white'}}>BUY NOW</Link></center>
                    
                </div>
            </div>
        </div>
    );
}

export default Accs;

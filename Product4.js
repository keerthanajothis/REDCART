import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const products = [
    { name: 'Apple', price: '1 kg = 150', image: 'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg' },
    { name: 'Banana', price: '10 pcs =50 ', image: 'https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=', couponRequired: true },
    { name: 'Orange', price: '1 kg = 90', image: 'https://thumbs.dreamstime.com/b/sliced-orange-fruit-leaves-isolated-white-23331258.jpg' },
    { name: 'Grapes', price: '1 kg = 100', image: 'https://www.shutterstock.com/image-photo/green-grape-leaves-isolated-on-260nw-533487490.jpg' },
    { name: 'Water Melon', price: '1 kg = 80', image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/DM/EC/KE/49293026/fresh-watermelon-fruit-500x500.webp', couponRequired: true },
    { name: 'Pomegranate', price: '1 kg = 250', image: 'https://m.media-amazon.com/images/I/611a1wD9ZGL.AC_UF1000,1000_QL80.jpg' },
    { name: 'Mango', price: '1 kg = 60', image: 'https://img.freepik.com/premium-photo/ripe-mango-with-green-leaf-isolated-white_252965-183.jpg', couponRequired: true },
    { name: 'Custard Apple', price: '1 kg = 110', image: 'https://cdn.britannica.com/95/126995-050-101B8B8D/Sweetsop.jpg' },
    { name: 'Sapota(chikoo)', price: '1 kg = 63', image: 'https://3.imimg.com/data3/WT/OF/MY-4367006/fresh-sapota-500x500.jpg' },
    { name: 'Papaya', price: '1 pcs = 20', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/6/TK/YZ/OA/145012231/prod-20220629-1548203238180800748031667-jpg-500x500.jpg', couponRequired: true },
    { name: 'Guava', price: '1 kg = 100', image: 'https://thumbs.dreamstime.com/b/isolated-green-guava-pink-flesh-one-whole-fruit-half-white-background-clipping-path-173876537.jpg' },
    { name: 'Muskmelon', price: '1 kg = 80', image: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/05/18150019/shutterstock_1376235665-1.jpg' }
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
            const priceParts = product.price.split('=')[1].trim().split(' ');
            const price = parseFloat(priceParts[0]);
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
        return cart.reduce((total, item) => total + parseFloat(item.price.split('=')[1]) * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="page">
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'white' }}>FRUITS</h2>

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
                    <Link to="/Product5"style={{color:'white',marginRight:'1000px'}}>NEXT</Link>
            <Link to="/Product3"style={{color:'white',marginRight:'2000px'}}>PREV</Link>
            <center><Link to="/Payment"style={{color:'white'}}>BUY NOW</Link></center>
                </div>
            </div>
        </div>
    );
}

export default Accs;

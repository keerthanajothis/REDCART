import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { name: 'நீண்ட பார்ட்டி கவுண்', price: 3500, image: 'https://images.meesho.com/images/products/259341621/agdu1_512.webp' },
    { name: 'ஃபான்சி சல்வார்', price: 1500, image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324642562/EW/VM/GZ/25660046/ladies-fancy-salwar-suits.jpg', couponRequired: true },
    { name: 'பாய்ஸ் தோத்தி', price: 599, image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/MM/AT/LG/89593293/designer-dupion-silk-festive-wear-kurta-with-dhoti-mens-wear-catalog-collection-500x500.jpg' },
    { name: 'லெஹெங்கா', price: 2000, image: 'https://i.etsystatic.com/17457268/r/il/1a9d30/3085484191/il_570xN.3085484191_4anj.jpg', couponRequired: true },
    { name: 'எத்னிக் வேர்', price: 1000, image: 'https://5.imimg.com/data5/PZ/WT/LJ/SELLER-7071255/kids-sleeveless-party-wear-gown-500x500.JPG', couponRequired: true },
    { name: 'சட்டைல் அட்டை', price: 799, image: 'https://e0.pxfuel.com/wallpapers/625/53/desktop-wallpaper-beautiful-hot-indian-models-in-saree-high-resolution-sari.jpg' },
    { name: 'காக்டெயில் அட்டை', price: 2999, image: 'https://www.beyoung.in/blog/wp-content/uploads/2018/11/Neck-Wear-For-Cocktail-Party-Dress-for-Men-853x1024.jpg' },
    { name: 'லெஹெங்கா சோலி', price: 2500, image: 'https://anayadesignerstudio.com/wp-content/uploads/2023/01/Latest-Modern-Jacket-Lehenga-Choli-For-Girls-2023.jpg' },
    { name: 'குழந்தைகள் சமீபத்திய உடைகள்', price: 999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLxNgCHtdinWHv8mMZGl9CLhmEKDI5nDXmA&usqp=CAU' },
    { name: 'மேற்கத்திய உடை', price: 599, image: 'https://rukminim1.flixcart.com/image/850/850/xif0q/shopsy-dress/b/j/3/xxl-g-8-101-181-lookavira-original-imaghyr4w8nqkzpn.jpeg?q=20', couponRequired: true },
    { name: 'பாய்ஸ் ஜீன்ஸ்', price: 250, image: 'https://5.imimg.com/data5/MI/JO/MY-33510293/trendy-boys-jeans.jpg', couponRequired: true },
    { name: 'ஹூட்டி', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5QsqOWTiflMpKPe5eiweS4F4TLGieoCJyA&usqp=CAU' }
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
            const discountedPrice = price - (price * 0.1); // 10% தள்ளுபடி பெறும்
            setCouponCodes({ ...couponCodes, [product.name]: discountedPrice });
            setDiscountedProducts([...discountedProducts, product.name]);
            alert('தள்ளுபடி வெற்றிகரமாக பெறப்பட்டது!');
        } else {
            alert('தவறான கூப்பன் குறியீடு!');
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
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'white' }}>உடைகள்</h2>

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
                                    {isInCart(product) && <button onClick={() => removeFromCart(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>அகற்று</button>}
                                    {product.couponRequired && (
                                        <div>
                                            <button onClick={() => applyCoupon(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>கூப்பன் பெறு</button>
                                            {couponCodes[product.name] !== undefined && (
                                                <div>
                                                    <input type="text" placeholder="கூப்பன் குறியீடை உள்ளிடவும்" value={couponCodes[product.name]} onChange={(e) => handleChange(e, product)} style={{ fontSize: '14px', padding: '5px', margin: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
                                                    <button onClick={() => handleApplyCoupon(product)} style={{ fontSize: '14px', padding: '5px 10px', margin: '5px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>பெறு</button>
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
                <h2 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>கார்டு</h2>
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
                    <h3 style={{ textAlign: 'center', color: 'white' }}>மொத்த விலை: ₹{getTotalPrice()}</h3>
                    <Link to="/Product4" style={{ color: 'white', marginRight: '1000px' }}>அடுத்து</Link>
                    <Link to="/Product2" style={{ color: 'white', marginRight: '2000px' }}>முந்தைய</Link>
                </div>
            </div>
        </div>
    );
}

export default Accs;

import React, { useState } from 'react';

const products = [
    {name: 'கேரட்', price:'1 கிலோ = 50', image: 'https://www.shutterstock.com/image-photo/fresh-carrot-cut-pieces-isolated-600nw-481776079.jpg' , couponRequired: true},
    { name: 'பீட்ரூட்', price: '1 கிலோ = 100', image: 'https://www.shutterstock.com/image-photo/isolated-beetroot-whole-two-slices-600nw-730249408.jpg' },
    { name: 'உருளைக்கிழங்கு', price:'1 கிலோ = 57', image: 'https://m.media-amazon.com/images/I/313dtY-LOEL.AC_UF1000,1000_QL80.jpg' },
    { name: 'தக்காளி', price: '1 கிலோ = 100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkU2Xqquhp_t9gNBgnjuhdF6G0u5lyR37CEQ&usqp=CAU' },
    { name: 'வெங்காயம்' , price:'1 கிலோ = 150', image:'https://png.pngtree.com/png-clipart/20210613/original/pngtree-shallot-or-red-onion-png-transparent-png-image_6402672.jpg', couponRequired: true},
    {name : 'கத்திரிக்காய்' , price:'1 கிலோ = 48',image:'https://nutritionadvance.com/wp-content/uploads/2018/01/whole-and-sliced-eggplant-aubergine.jpg'},
    {name: 'பூக்கோசு' ,price:'1 கிலோ = 60',image:'https://t3.ftcdn.net/jpg/00/68/10/58/360_F_68105885_hf9yIAhaAoa69xgSnwviKsomIh9blBJJ.jpg'},
    {name: 'பச்சை பட்டாணி' , price:'1 கிலோ = 90',image:'https://cdn.britannica.com/49/174549-050-C084B474/legumes-pod-pea-plant-peas-seeds.jpg', couponRequired: true},
    {name: 'பூசணிக்காய்' , price:'1 கிலோ = 63',image:'https://media.istockphoto.com/id/1438155960/photo/two-fresh-orange-pumpkins.webp?b=1&s=170667a&w=0&k=20&c=HXk1574MTJjMlchjWxhq1BXvfL4DQlWaCeWcTlddM4w='},
    {name: 'லேடிஸ் ஃபிங்கர்',price:'1 கிலோ = 45' ,image:'https://farmersfz.com/assets/public/vegimg/ladisfing1.jpg'},
    {name:'முள்ளங்கி' ,price:'1 கிலோ = 87',image:'https://noshingwiththenolands.com/wp-content/uploads/2021/08/Daikon-radish-bunch-Custom.jpg', couponRequired: true},
    {name:'ப்ரோக்கோலி',price:'1 கிலோ = 150',image:'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg' }

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
        return cart.reduce((total, item) => total + parseFloat(item.price.split('=')[1]) * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="page">
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'white' }}>காய்கறிகள்</h2>

            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products.map(product => (
                    <div className="product-card" key={product.name} style={{ width: 'calc(25% - 20px)', marginBottom: '25px', maxHeight: '510px', overflow: 'hidden', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <div className="product-item" style={{ padding: '10px', textAlign: 'center' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <h2 style={{ color: 'white' }}>{product.name}</h2>
                            <p style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '5px' }}>
                                ₹{couponCodes[product.name] ? couponCodes[product.name] : product.price} ரூபாய்*
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
                </div>
            </div>
        </div>
    );
}

export default Accs;

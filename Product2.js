import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const products = [
    {name: 'Laptop', price: 35000, image: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708646400&semt=ais' },
    { name: 'Smart Watch', price: 699, image: 'https://m.media-amazon.com/images/I/61vNo+aPWUL.jpg', couponRequired: true },
    { name: 'Kitchen Gadgets', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJpwGfrSp3J_dvbbIyIowhKt9IiJZITDbpg&usqp=CAU' },
    { name: 'AC', price: 15000, image: 'https://healthairindia.com/wp-content/uploads/2020/11/msy-gn-series.png' },
    { name: 'Power Bank' , price: 1998, image: 'https://imagesm.plexussquare.in/URBANGEAR/Images/19-06-2023/1687171641695.jpeg', couponRequired: true},
    { name : 'Hair Dryer' , price: 1745, image: 'https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/personal-grooming/female-grooming/hair-dryer/HD3152/cover.png'},
    { name: 'Iron Box' ,price: 499, image: 'https://sharptronics.in/cdn/shop/products/715O0WdkMYL._SL1500.jpg?v=1614333113', couponRequired: true},
    { name: 'Wireless Earbuds' , price: 4299, image: 'https://m.media-amazon.com/images/I/716gAr0KA6L.jpg'},
    { name: 'SmartPhones' , price: 12000, image: 'https://m.media-amazon.com/images/I/71kduvIxBVL.jpg'},
    { name: 'Whirlpool', price: 25000 , image: 'https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/wdwed_1695030704534_1695030729633.jpg', couponRequired: true},
    { name: 'Air-Cooler' , price: 6000, image: 'https://images-cdn.ubuy.co.in/6350fad1476ca1256b24c916-portable-evaporative-air-cooler-outdoor.jpg'},
    { name: 'Samsung LED Tv', price: 23000, image: 'https://m.media-amazon.com/images/I/71G3w6wIhZL.SL1500.jpg' }
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
            <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'white' }}>ELECTRONICS</h2>

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
                    <Link to="/Product3"style={{color:'white',marginRight:'1000px'}}>NEXT</Link>
                    <Link to="/Product1"style={{color:'white',marginRight:'2000px'}}>PREV</Link>
                    <center><Link to="/Payment"style={{color:'white'}}>BUY NOW</Link></center>
                    
                </div>
            </div>
        </div>
    );
}

export default Accs;

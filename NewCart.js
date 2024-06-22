import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Accs() {
    const [cart, setCart] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [message, setMessage] = useState("");

    const products = [
        { name: 'Product Manufacturing', price: '999', image: 'https://www.shutterstock.com/image-photo/luggage-consisting-large-suitcases-rucksacks-260nw-129213182.jpg' },
        { name: 'School Bag', price: '574', image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/PN/DS/CG/113370877/55205-5-school-bag-free-clipart-hd.png' },
        { name: 'Golden Dresses', price: '50000', image: 'https://t3.ftcdn.net/jpg/02/34/21/58/240_F_234215884_pAF9PoUM5xEAsqW8g2oXsFUPRnkuOA14.jpg' },
        { name: 'Artistic Jewelry', price: '60000', image: 'https://t4.ftcdn.net/jpg/06/35/97/01/240_F_635970157_dXvdme8bVtVW00VHw7JJVfreCF3HXqlU.jpg' },
        { name: 'Fashion Watches', price: '800', image: 'https://t3.ftcdn.net/jpg/05/25/54/06/240_F_525540629_QxKds12GbTjsbqv3WeMQTstCvpvgy6MC.jpg' },
        { name: 'Smart Gadgets', price: '3500', image: 'https://t4.ftcdn.net/jpg/02/44/17/39/240_F_244173933_QPbn77c2Tjy5A4XoOJWqxysJibBpDy3T.jpg' },
        { name: 'Wallet', price: '450', image: 'https://t4.ftcdn.net/jpg/01/39/32/25/240_F_139322524_jFW4sl5d0NBiMHwSQ0vrrrQyGvRvvFzV.jpg' },
        { name: 'Four Piece Suit', price: '699', image: 'https://t3.ftcdn.net/jpg/06/18/51/94/240_F_618519434_Ese9nHq1HjSTqMJCF6Xgdd8ahel0UISh.jpg' },
        { name: 'Travel Pillows', price: '301', image: 'https://t4.ftcdn.net/jpg/04/42/89/09/240_F_442890972_a4yppIGxZUgmL67RJyMaKZEYWpYGtZ2V.jpg' },
        { name: 'Shoulder Strap', price: '1348', image: 'https://t4.ftcdn.net/jpg/05/32/10/29/240_F_532102968_dRuciqo2ApI2aG7rNwz02tChizGW09h7.jpg' },
        { name: 'Travel Kits', price: '500', image: 'https://t3.ftcdn.net/jpg/04/11/59/40/240_F_411594000_w5BdtWVZ7z4pxGBg5sScjnJc5x2ApK7b.jpg' },
        { name: 'Beware of Fraud', price: '2000', image: 'https://t4.ftcdn.net/jpg/06/05/39/51/240_F_605395171_sW5hkfnffnL6Z6ZpIC0OJZTjslUeRgiQ.jpg' }
    ];

    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex(item => item.name === product.name);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setMessage("Added to Cart Successfully");
        setShowDialog(true);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.map(item => item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
        setCart(updatedCart);
        setMessage("Removed Successfully");
        setShowDialog(true);
    };

    const isInCart = (product) => {
        return cart.some(item => item.name === product.name);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="page">
            {showDialog && (
                <div className="dialog" style={{ background: 'white', color: 'black', padding: '10px', borderRadius: '5px', textAlign: 'center', position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '200px', zIndex: '999' }}>
                    <p>{message}</p>
                    <button onClick={handleCloseDialog} style={{ background: 'none', border: '1px solid black', padding: '5px 10px', color: 'black', cursor: 'pointer', marginTop: '10px' }}>Close</button>
                </div>
            )}
            <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Accessories</h2>
            <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products.map(product => (
                    <div className="product-card" style={{ width: '25%', marginBottom: '25px' }} key={product.name}>
                        <div className="product-item" style={{ border: '1px solid #04fd3e8d', padding: '10px', textAlign: 'center' }}>
                            <img src={product.image} alt={product.name} style={{ maxWidth: '300px', height: '300px' }} />
                            <h2>{product.name}</h2>
                            <p style={{ color: 'white' }}>₹{product.price} INR*</p>
                            <button onClick={() => addToCart(product)} style={{ color: 'green', width: '150px', padding: '5px' }}>Add to Cart</button>
                            {isInCart(product) && (
                                <button onClick={() => removeFromCart(product)} style={{ width: '150px', color: 'green', padding: '5px' }}>Remove from Cart</button>
                            )}
                        </div>
                        {isInCart(product) && (
                            <div className="quantity-message" style={{ marginTop: '10px' }}>
                                <p style={{ color: 'white' }}>Quantity: {cart.find(item => item.name === product.name).quantity}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link to={{ pathname: "/Cart", state: { cart: cart } }} style={{ color: 'white' }}>Go to Cart</Link>
            <Link to="/Product2" style={{ color: 'white' }}>Next</Link>
        </div>
    );
}

function CartPage({ location }) {
    const { cart } = location.state;

    return (
        <div className="page">
            <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Cart</h2>
            <div>
                <h3>Items in Cart:</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                            {item.name} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Accs;

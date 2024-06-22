import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemoveFromCart = (productName) => {
        removeFromCart(productName);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div key={item.name}>
                        <p>{item.name} - Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
                    </div>
                ))
            )}
            <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Back to Home</Link>
        </div>
    );
}

export default CartPage;

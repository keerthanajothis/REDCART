/*import React, { useContext } from 'react';
import CartContext from './CartContext';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemoveFromCart = (productName) => {
        removeFromCart(productName);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <div key={item.name}>
                    <p>{item.name} - Quantity: {item.quantity}</p>
                    <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
*/
import React, { useState } from 'react';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

   
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div>
            <center><h1>Shopping Cart</h1></center>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                                <p>Product: {item.name}</p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default  Cart;

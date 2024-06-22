import React from 'react';

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

export default CartPage;

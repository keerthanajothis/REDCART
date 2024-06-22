import React, { useState } from 'react';


function Accs() {
    const [cart, setCart] = useState([]);

    const products = [
        {name: 'Luggage bags', price:'999', image: 'https://www.shutterstock.com/image-photo/luggage-consisting-large-suitcases-rucksacks-260nw-129213182.jpg' },
        { name: 'School Bags', price: '574', image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/PN/DS/CG/113370877/55205-5-school-bag-free-clipart-hd.png' },
        { name: 'Gold jewel', price:'50000', image: 'https://t3.ftcdn.net/jpg/02/34/21/58/240_F_234215884_pAF9PoUM5xEAsqW8g2oXsFUPRnkuOA14.jpg' },
        { name: 'Artistic Diamonds', price: '60000', image: 'https://t4.ftcdn.net/jpg/06/35/97/01/240_F_635970157_dXvdme8bVtVW00VHw7JJVfreCF3HXqlU.jpg' },
        { name: 'Fashion Bangles' , price:'800', image:'https://t3.ftcdn.net/jpg/05/25/54/06/240_F_525540629_QxKds12GbTjsbqv3WeMQTstCvpvgy6MC.jpg'},
        {name : 'Watches & SmartWatches' , price:'3500',image:'https://t4.ftcdn.net/jpg/02/44/17/39/240_F_244173933_QPbn77c2Tjy5A4XoOJWqxysJibBpDy3T.jpg'},
        {name: 'Wallets' ,price:'450',image:'https://t4.ftcdn.net/jpg/01/39/32/25/240_F_139322524_jFW4sl5d0NBiMHwSQ0vrrrQyGvRvvFzV.jpg'},
        {name: 'Umbrellas' , price:'699',image:'https://t3.ftcdn.net/jpg/06/18/51/94/240_F_618519434_Ese9nHq1HjSTqMJCF6Xgdd8ahel0UISh.jpg'},
        {name: 'Travel Pillows' , price:'301',image:'https://t4.ftcdn.net/jpg/04/42/89/09/240_F_442890972_a4yppIGxZUgmL67RJyMaKZEYWpYGtZ2V.jpg'},
        {name: 'Causal Shoes',price:'1348' ,image:'https://t4.ftcdn.net/jpg/05/32/10/29/240_F_532102968_dRuciqo2ApI2aG7rNwz02tChizGW09h7.jpg'},

        {name: 'Travel Kits',price:'500' ,image:'https://t3.ftcdn.net/jpg/04/11/59/40/240_F_411594000_w5BdtWVZ7z4pxGBg5sScjnJc5x2ApK7b.jpg'},
        
        {name:'Skin Care Products',price:'2000',image:'https://t4.ftcdn.net/jpg/06/05/39/51/240_F_605395171_sW5hkfnffnL6Z6ZpIC0OJZTjslUeRgiQ.jpg' }

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
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.map(item => item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    const isInCart = (product) => {
        return cart.some(item => item.name === product.name);
    };

    return (
        <div className="page3">
            <h2 style={{ textAlign: 'center' }}>Dresses</h2>
            <div className="product-container3">
                {products.map(product => (
                    <div className="product-card3" key={product.name}>
                        <div className="product-item3">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>₹{product.price} INR*</p>
                            <button onClick={() => addToCart(product)}style={{width:'100px',marginLeft:'450px'}}>Add to Cart</button>
                            {isInCart(product) && (
                                <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                            )}
                        </div>
                        {isInCart(product) && (
                            <div className="quantity-message3">
                                <p>Quantity: {cart.find(item => item.name === product.name).quantity}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accs;
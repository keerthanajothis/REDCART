import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div style={{ padding: '20px' }}>
                <img src="https://t3.ftcdn.net/jpg/01/47/51/60/240_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg" alt="Vegetables" style={{ width: '200px', height: '200px' }} />
                <h2 style={{ color: 'white', marginTop: '20px' }}>Vegetables</h2>
                <button ><Link to="/Vegetable">View Products</Link></button>
            </div>

            <div style={{ padding: '20px' }}>
                <img src="https://t3.ftcdn.net/jpg/01/79/37/20/240_F_179372024_2iyHtwD5rwPl339Ju0DIk676azO9VqbO.jpg" alt="Fruits" style={{ width: '200px', height: '200px' }} />
                <h2 style={{ color: 'white' }}>Fruits</h2>
                <button onClick={() => handleCategoryClick('Fruits')}><Link to ="/Fruits">View Products</Link></button>
            </div>

            <div style={{ padding: '20px' }}>
                <img src="https://t4.ftcdn.net/jpg/01/98/45/23/240_F_198452340_fSsuaEB3kFGNtYrnFwyxEvt3nocztUcP.jpg" alt="Accessories" style={{ width: '200px', height: '200px' }} />
                <h2 style={{ color: '#333' }}>Accessories</h2>
                <button onClick={() => handleCategoryClick('Accessories')}><Link t0="/Acc">View Products</Link></button>
            </div>

            <div style={{ padding: '20px' }}>
                <img src="https://t3.ftcdn.net/jpg/06/27/99/00/240_F_627990070_XXRRRFj6GT4B1VWNOazGq9n2gKyg19SX.jpg" alt="Dresses" style={{ width: '200px', height: '200px' }} />
                <h2 style={{ color: '#333' }}>Dresses</h2>
                <button onClick={() => handleCategoryClick('Dresses')}><Link to="/Dresses">View Products</Link></button>
            </div>

            {selectedCategory && (
                <div>
                    <h3>You selected: {selectedCategory}</h3>
                    {/* Render products for the selected category here */}
                </div>
            )}
        </div>
    );
}

export default Product;

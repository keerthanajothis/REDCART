import React from 'react';
import { Link } from 'react-router-dom';

function Front() {
    const products = [
        { name: 'Accessories', image: 'https://t4.ftcdn.net/jpg/01/98/45/23/240_F_198452340_fSsuaEB3kFGNtYrnFwyxEvt3nocztUcP.jpg', link: '/Product1' },
        { name: 'Electronics', image: 'https://img.freepik.com/free-photo/still-life-teenager-s-desk_23-2149371274.jpg?size=626&ext=jpg&ga=GA1.1.177402008.1698845684&semt=ais', link: '/Product2' },
        { name: 'Dresses', image: 'https://t3.ftcdn.net/jpg/06/27/99/00/240_F_627990070_XXRRRFj6GT4B1VWNOazGq9n2gKyg19SX.jpg', link: '/Product3' },
        { name: 'Fruits', image: 'https://t3.ftcdn.net/jpg/01/79/37/20/240_F_179372024_2iyHtwD5rwPl339Ju0DIk676azO9VqbO.jpg', link: '/Product4' },
        { name: 'Vegetables', image: 'https://t3.ftcdn.net/jpg/01/47/51/60/240_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg', link: '/Product5' }
    ];

    return (
        <div className="page3">
            <h2 style={{ textAlign: 'center', marginTop: '80px',marginBottom:'100px', color: 'white' }}>Products</h2>
            <div className="product-container3" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                {products.map(product => (
                    <div className="product-card3" key={product.name}>
                        <Link to={product.link} className="product-link3" style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={product.image} alt={product.name} className="product-image3" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                            <h3 className="product-name3">{product.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Front;

import React from 'react';
import './Product.css';

function Product({ product, addToCart }) {
    return (
        <div className="product">
            <img src={product.picture} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product._id)}>Buy</button>
        </div>
    );
}

export default Product;
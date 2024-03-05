import React, { useState } from 'react';
import Navbar from './Navbar';
import Product from './Product';
import productsData from './data/product.json';
import './App.css';

function App() {
    const [products] = useState(productsData);
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
        const productToAdd = products.find(product => product.product === productId);
        setCart([...cart, productToAdd]);
    };

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <div className="products">
            {products.map((product, index) => (
    <Product key={index} product={product} addToCart={addToCart} />
))}

            </div>
        </div>
    );
}

export default App;
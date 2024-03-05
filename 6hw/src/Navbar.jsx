import React from 'react';
import './Navbar.css';

function Navbar({ cartCount }) {
    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart ({cartCount})</li>
            </ul>
        </nav>
    );
}

export default Navbar;
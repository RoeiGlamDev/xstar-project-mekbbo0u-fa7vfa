import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">GlamCS</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
};

export default Navigation;
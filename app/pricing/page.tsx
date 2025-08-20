import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Experience luxury at its finest</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-card">
                    <h2 className="card-title">Basic Package</h2>
                    <p className="price">$29.99</p>
                    <p className="description">Perfect for everyday glam.</p>
                    <button className="buy-button">Buy Now</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Premium Package</h2>
                    <p className="price">$49.99</p>
                    <p className="description">Elevate your beauty routine.</p>
                    <button className="buy-button">Buy Now</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Luxury Package</h2>
                    <p className="price">$89.99</p>
                    <p className="description">Indulge in the ultimate experience.</p>
                    <button className="buy-button">Buy Now</button>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-text">© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;
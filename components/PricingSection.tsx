import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styles

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$29.99</p>
                        <ul className="card-features">
                            <li>High-quality cosmetics</li>
                            <li>Free shipping</li>
                            <li>30-day satisfaction guarantee</li>
                        </ul>
                        <button className="btn buy-now">Buy Now</button>
                    </div>
                    <div className="pricing-card premium">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$49.99</p>
                        <ul className="card-features">
                            <li>All Basic features</li>
                            <li>Exclusive access to new products</li>
                            <li>Personalized beauty consultation</li>
                        </ul>
                        <button className="btn buy-now">Buy Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$99.99</p>
                        <ul className="card-features">
                            <li>All Premium features</li>
                            <li>VIP customer support</li>
                            <li>Invitation to exclusive events</li>
                        </ul>
                        <button className="btn buy-now">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>Welcome to GlamCS</h1>
                <p>Your destination for high-end cosmetics.</p>
            </header>
            <section className="about-content">
                <h2>About Us</h2>
                <p>
                    At GlamCS, we believe in elegance and luxury. Our products are designed to enhance your natural beauty with a touch of sophistication.
                </p>
                <p>
                    Experience our unique 3D designs and effects that set us apart in the cosmetics industry.
                </p>
            </section>
            <footer className="about-footer">
                <p>© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to GlamCS</h1>
                <p className="about-description">
                    Discover the elegance of our luxury cosmetics, designed for those who appreciate the finer things in life.
                </p>
                <p className="about-description">
                    Our products are crafted with the highest quality ingredients, ensuring a flawless finish and a touch of glamour.
                </p>
                <button className="about-button">Explore Our Collection</button>
            </div>
        </section>
    );
};

export default AboutSection;
import React from 'react';
import './Slider.css'; // Importing CSS for styling

const Slider: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <input type="range" min="1" max="100" className="slider-input" />
                <div className="slider-value">Value: <span id="sliderValue">50</span></div>
            </div>
        </div>
    );
};

export default Slider;
import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    id: 1,
    name: 'Sophia L.',
    feedback: 'GlamCS products transformed my skincare routine. Highly recommend!',
    image: 'path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Isabella R.',
    feedback: 'The quality is unmatched. I feel luxurious every time I use them.',
    image: 'path/to/image2.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Olivia T.',
    feedback: 'GlamCS is my go-to for all things beauty. Love the packaging!',
    image: 'path/to/image3.jpg', // Replace with actual image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
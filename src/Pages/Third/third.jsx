import './third.css';
import { useState, useEffect } from 'react';

const ThirdPage = () => {
  const testimonials = [
    {
      name: 'Alexender',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Structured, organized and pleasant to deal with…',
    },
    {
      name: 'Emily Rose',
      image: '360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
      message: 'Great service! Delivered ahead of time…',
    },
    {
      name: 'David Miller',
      image: 'premium_photo-1689539137236-b68e436248de.jpeg',
      message: 'Superb quality and great communication…',
    },
    {
      name: 'User 4',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Impressed by attention to detail.',
    },
    {
      name: 'User 5',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Smooth experience from start to end.',
    },
    {
      name: 'User 6',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Very professional and skilled team.',
    },
    {
      name: 'User 7',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Highly recommended.',
    },
    {
      name: 'User 8',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Will definitely hire again!',
    },
    {
      name: 'User 9',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Delivered before deadline!',
    },
    {
      name: 'User 10',
      image: '360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      message: 'Clean and efficient work.',
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 5);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev =>
        prev === Math.ceil(testimonials.length / itemsPerPage) - 1
          ? 0
          : prev + 1
      );
    }, 10900);
    return () => clearInterval(interval);
  }, [itemsPerPage, testimonials.length]);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">12000+ SATISFIED CUSTOMERS</h2>

      <div className="testimonial-list">
        {visibleTestimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-img-wrapper">
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-img"
              />
              <div className="quote-icon">❝</div>
            </div>
            <p className="testimonial-name">{item.name}</p>
            <p className="testimonial-message">{item.message}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(idx)}
          />
        ))}
      </div>

      <div className="testimonial-nav">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 0))}
          disabled={currentPage === 0}
        >
          ← Prev
        </button>
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;

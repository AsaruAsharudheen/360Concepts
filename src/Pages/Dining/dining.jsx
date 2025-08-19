import { useState } from 'react';
import './dining.css';

const diningData = [
  {
    img: 'dining (1).jpg',
    title: 'Modern Dining 1',
    desc: 'Elegant dining setup for everyday family meals.',
  },
  {
    img: 'dining (2).jpg',
    title: 'Classic Dining 2',
    desc: 'Traditional wooden dining with warm lighting.',
  },
  {
    img: 'dining (3).jpg',
    title: 'Luxury Dining 3',
    desc: 'Premium seating with modern design flair.',
  },
  {
    img: 'dining (4).jpg',
    title: 'Space-Saving Design 4',
    desc: 'Compact table sets ideal for small spaces.',
  },
  {
    img: 'dining (5).jpg',
    title: 'Rustic Look 5',
    desc: 'Wood finishes with a natural earthy vibe.',
  },
  {
    img: 'dining (6).jpg',
    title: 'Contemporary Setup 6',
    desc: 'Chic and modern dining arrangement.',
  },
  {
    img: 'dining (7).jpg',
    title: 'Glass Table 7',
    desc: 'Transparent design with elegant chairs.',
  },
  {
    img: 'dining (8).jpg',
    title: 'Minimalist Dining 8',
    desc: 'Sleek styling with clean finishes.',
  },
  {
    img: 'dining (9).jpg',
    title: 'Warm Ambience 9',
    desc: 'Lighting that elevates your dining experience.',
  },
  {
    img: 'dining (10).jpg',
    title: 'Grand Setup 10',
    desc: 'Spacious table with luxurious touches.',
  },
];

const Dining = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleImageClick = img => {
    setSelectedImg(img);
    setShowModal(true);
  };

  return (
    <>
      <div className="contact-header-modern-living">
        <div className="header-overlay-living">
          <h1>Dining Room</h1>
        </div>
        <img
          src="dining (1).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      <div className="livingroom-text">
        <h1>Stylish & Comfortable Dining Spaces</h1>
        <p>
          Create a welcoming atmosphere for meals and gatherings with
          360Concepts dining interiors. We blend functionality with elegance to
          design dining rooms tailored to your taste and space.
        </p>
        <p>
          From classic wooden tables to modern glass tops and luxurious
          upholstered seating, we design dining setups that foster togetherness
          and enhance your lifestyle.
        </p>
        <div className="living-images-type">
          <div className="living-image-card">
            <img src="dining (11).jpg" alt="" />
            <p>Solid Wood Dining with Cushioned Chairs</p>
          </div>
          <div className="living-image-card">
            <img src="dining (12).jpg" alt="" />
            <p>Marble-Top Dining for 6</p>
          </div>
          <div className="living-image-card">
            <img src="dining (14).jpg" alt="" />
            <p>Glass Table with Designer Legs</p>
          </div>
        </div>
      </div>

      <div className="workingliving">
        <h1>Why Choose 360Concepts for Dining Interiors?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Smart Dining with Elegant Touches</h2>
            <p>
              From compact homes to spacious villas, our dining designs fit
              perfectly into your lifestyle. With expert craftsmanship, premium
              finishes, and optimal layout planning, 360Concepts delivers
              elegance you’ll dine in every day.
            </p>
          </div>
          <div className="images-living-working">
            <img src="dining (14).jpg" alt="Dining Interior" />
          </div>
        </div>
      </div>

      <div className="workingSteps-living">
        <h3>What Makes Our Dining Rooms Special?</h3>
        <div className="steps">
          {[
            'Space-Optimized Layouts',
            'Premium Material Selection',
            'Tailored Table Sizes',
            'Comfortable Seating Options',
            'Elegant Lighting Choices',
            'Modular Storage Options',
            'High-End Finishes',
            'Affordable Luxury Designs',
          ].map((title, i) => (
            <div className="feature-card" key={i}>
              <h5>{title}</h5>
              <p>
                Experience beauty and utility with our thoughtfully crafted
                dining solutions.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="living-container">
        {diningData.map((item, index) => (
          <div
            key={index}
            className={`living-card ${
              index % 2 === 0 ? 'left-image' : 'right-image'
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="living-image"
              onClick={() => handleImageClick(item.img)}
            />
            <div className="living-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImg} alt="Enlarged Dining" />
          </div>
        </div>
      )}
    </>
  );
};

export default Dining;

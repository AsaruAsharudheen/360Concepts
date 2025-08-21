import { useState } from 'react';
import './living.css';

const livingData = [
  {
    img: 'leaving (1).jpg',
    title: 'Elegant Modern Living',
    desc: 'A minimalist modern space combining comfort with sleek aesthetics for perfect family relaxation.',
  },
  {
    img: 'leaving (2).jpg',
    title: 'Warm Lighting Decor',
    desc: 'Soft lighting enhances the cozy ambiance in this contemporary design.',
  },
  {
    img: 'leaving (3).jpg',
    title: 'Luxury Wooden Accents',
    desc: 'Rich wooden textures bring timeless elegance to this spacious living room.',
  },
  {
    img: 'leaving (4).jpg',
    title: 'Open Plan Comfort',
    desc: 'Spacious layouts with multifunctional furniture define modern sophistication.',
  },
  {
    img: 'leaving (5).jpg',
    title: 'Artful Interiors',
    desc: 'Statement art and contemporary furniture create a stylish and welcoming space.',
  },
  {
    img: 'leaving (6).jpg',
    title: 'Neutral Tones Harmony',
    desc: 'Earthy palettes blend beautifully for a calm and elegant aesthetic.',
  },
  {
    img: 'leaving (7).jpg',
    title: 'Indoor-Outdoor Blend',
    desc: 'A design that connects interior comfort with natural outdoor beauty.',
  },
  {
    img: 'leaving (8).jpg',
    title: 'Sleek Urban Living',
    desc: 'Smart design meets compact space for modern city lifestyle.',
  },
  {
    img: 'leaving (9).jpg',
    title: 'Classic Contemporary Mix',
    desc: 'Modern shapes and traditional materials merge in balanced beauty.',
  },
  {
    img: 'leaving (10).jpg',
    title: 'Designer Living Setup',
    desc: 'A perfect combination of elegance, comfort, and functionality in design.',
  },
];

const LivingRoom = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleImageClick = img => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImg('');
  };

  return (
    <>
      <div className="contact-header-modern-living">
        <div className="header-overlay-living">
          <h1>Living Room</h1>
        </div>
        <img
          src="leaving (2).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      <div className="livingroom-text">
        <h1>Customized Living Room Designs</h1>
        {/* <p>
          Transform your living space with 360Concepts’s bespoke living room
          designs, tailored to suit your unique style and functional needs.
        </p>
        <p>
          Explore our exclusive collection and consult with our experienced
          designers, who are dedicated to crafting living room interiors that
          combine sophistication, comfort, and practicality.
        </p> */}

        <div className="living-images-type">
          <div className="living-image-card">
            <img src="13.jpg" alt="" />
            <p>Wall mount TV Unit with back panel</p>
          </div>
          <div className="living-image-card">
            <img src="leaving card (2).webp" alt="" />
            <p>Wall Mount TV Unit with drawers</p>
          </div>
          <div className="living-image-card">
            <img src="leaving card (3).webp" alt="" />
            <p>Wall mount TV Unit with Laminate Wall Panel</p>
          </div>
        </div>
      </div>

      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Living Room Design?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Discover the 360Concepts Advantage</h2>
            <p>
              When it comes to crafting a living room that truly feels like
              home, 360Concepts stands out with its expertise, creativity, and
              commitment to quality. Our designs reflect your unique style and
              are built to last.
            </p>
          </div>
          <div className="images-living-working">
            <img
              src="workinglivingroom.webp"
              alt="Living Room Design"
            />
          </div>
        </div>
      </div>

      <div className="workingSteps-living">
        <h3>Here’s what makes 360Concepts the best choice:</h3>
        <div className="steps">
          {[
            'Expert Craftsmanship',
            'Personalized Designs',
            'Seamless Functionality',
            'Eco-Friendly Choices',
            'Complete Design Solutions',
            'Exceptional Customer Service',
            'Flexible Customization',
            'Affordable Luxury',
          ].map((title, index) => (
            <div className="feature-card" key={index}>
              <h5>{title}</h5>
              <p>
                Experience luxury and functionality with our expert
                craftsmanship and thoughtful layouts.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="living-container">
        {livingData.map((item, index) => (
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

      {/* Responsive Modal */}
      {showModal && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-inner" onClick={e => e.stopPropagation()}>
            <img src={selectedImg} alt="Full View" />
          </div>
        </div>
      )}
    </>
  );
};

export default LivingRoom;

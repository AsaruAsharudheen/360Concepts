import { useState } from 'react';
import '../LivingRooms/living.css'; // ✅ keep same CSS (classNames unchanged)
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from '@ant-design/icons';
const restaurantData = [
  {
    img: 'restaurant (11).jpg',
    title: 'Elegant Dining Area',
    desc: 'A sophisticated dining setup designed to enhance guest experiences with comfort and elegance.',
  },
  {
    img: 'restaurant (12).jpg',
    title: 'Cozy Lighting Ambience',
    desc: 'Warm and inviting lighting creates the perfect mood for unforgettable dining moments.',
  },
  {
    img: 'restaurant (13).jpg',
    title: 'Luxury Wooden Interiors',
    desc: 'Premium wooden accents add timeless class and character to the restaurant environment.',
  },
  {
    img: 'restaurant (14).jpg',
    title: 'Spacious Seating Layout',
    desc: 'Smart layouts ensure a comfortable and enjoyable dining experience for all guests.',
  },
  {
    img: 'restaurant (15).jpg',
    title: 'Artful Culinary Decor',
    desc: 'Art-inspired decor and modern furniture elevate the overall ambiance.',
  },
  {
    img: 'restaurant (6).jpg',
    title: 'Neutral & Elegant Tones',
    desc: 'Earthy palettes and calm aesthetics set the tone for fine dining.',
  },
  {
    img: 'restaurant (7).jpg',
    title: 'Indoor-Outdoor Dining',
    desc: 'Blending nature with luxury to offer a unique dining experience.',
  },
  {
    img: 'restaurant (8).jpg',
    title: 'Urban Chic Restaurant',
    desc: 'A sleek and modern design tailored for vibrant city lifestyles.',
  },
  {
    img: 'restaurant (9).jpg',
    title: 'Classic Meets Contemporary',
    desc: 'Where tradition meets modern dining aesthetics in perfect harmony.',
  },
  {
    img: 'restaurant (10).jpg',
    title: 'Fine Dining Elegance',
    desc: 'A luxurious space combining design, comfort, and world-class hospitality.',
  },
];

const RestaurantPage = () => {
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
      {/* Header Section */}
      <div className="contact-header-modern-living">
        <div className="header-overlay-living">
          <h1>Restaurant</h1>
        </div>
        <img
          src="restaurant (4).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      {/* Intro Text Section */}
      <div className="livingroom-text">
        <h1>Customized Restaurant Interior Designs</h1>

        <div className="living-images-type">
          <div className="living-image-card">
            <img src="restaurant (1).jpg" alt="" />
            <p>Modern Dining Table Arrangement</p>
          </div>
          <div className="living-image-card">
            <img src="restaurant (2).jpg" alt="" />
            <p>Cozy Booth Seating with Ambient Lights</p>
          </div>
          <div className="living-image-card">
            <img src="restaurant (3).jpg" alt="" />
            <p>Luxury Open Dining Layout</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Restaurant Design?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Discover the 360Concepts Advantage</h2>
            <p>
              At 360Concepts, we transform restaurants into unforgettable
              spaces. Our team blends creativity with functionality to deliver
              designs that attract customers and enhance their dining
              experience.
            </p>
          </div>
          <div className="images-living-working">
            <img src="restaurant (5).jpg" alt="Restaurant Design" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="workingSteps-living">
        <h3>Here’s what makes 360Concepts the best choice:</h3>
        <div className="steps">
          {[
            'Expert Interior Craftsmanship',
            'Tailored Dining Ambience',
            'Seamless Guest Flow',
            'Eco-Friendly Materials',
            'Complete Design & Build',
            'Exceptional Service',
            'Flexible Customization',
            'Affordable Luxury',
          ].map((title, index) => (
            <div className="feature-card" key={index}>
              <h5>{title}</h5>
              <p>
                Experience unmatched design and practicality, ensuring your
                restaurant stands out with elegance and efficiency.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant Gallery Section */}
      <div className="living-container">
        {restaurantData.map((item, index) => (
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

      {/* Image Modal */}
      {showModal && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-inner" onClick={e => e.stopPropagation()}>
            <img src={selectedImg} alt="Full View" />
          </div>
        </div>
      )}
      <div className="CompanyAbout">
        <div className="background-image"></div>

        <div className="footer-content">
          <div className="footer-column">
            <h4>QuickLinks</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Gallery</p>
            <p>Products</p>
          </div>

          <div className="footer-column">
            <h4>Testimonials</h4>
            <p>Key Handover</p>
            <p>Blog</p>
            <p>Terms</p>
            <p>FAQ</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-column">
            <h4>Related Links</h4>
            <p>Reliable Interior Designers in Coimbatore</p>
            <p>No.1 in Thrissur</p>
            <p>Top Designers in Kottayam</p>
            <p>Edge Designers in HSR Layout</p>
            <p>Custom Kitchens in Kerala</p>
            <p>Designers in Kochi</p>
          </div>

          <div className="footer-column social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/360concepts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookFilled />
              </a>
              <a
                href="https://twitter.com/360concepts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterSquareFilled />
              </a>
              <a
                href="https://www.instagram.com/360concepts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramFilled />
              </a>
              <a
                href="https://www.linkedin.com/in/360concepts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://www.youtube.com/@360concepts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeFilled />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;

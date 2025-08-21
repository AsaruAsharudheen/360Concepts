import { useState } from 'react';
import '../LivingRooms/living.css'; // ✅ same CSS (classNames unchanged)
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const shopData = [
  {
    img: 'shop (1).jpg',
    title: 'Modern Showroom Design',
    desc: 'A sleek and contemporary shop layout to captivate customers instantly.',
  },
  {
    img: 'shop (2).jpg',
    title: 'Creative Display Units',
    desc: 'Innovative product displays designed to highlight your best items.',
  },
  {
    img: 'shop (3).jpg',
    title: 'Warm Lighting Concepts',
    desc: 'Soft lighting that enhances the shopping experience and product appeal.',
  },
  {
    img: 'shop (4).jpg',
    title: 'Spacious Store Interiors',
    desc: 'Smart layouts ensure smooth customer flow and comfortable browsing.',
  },
  {
    img: 'shop (5).jpg',
    title: 'Luxury Retail Finishes',
    desc: 'Premium finishes that add sophistication to your retail environment.',
  },
  {
    img: 'shop (6).jpg',
    title: 'Neutral & Elegant Palettes',
    desc: 'Modern color schemes to create a calm and inviting shopping space.',
  },
  {
    img: 'shop (7).jpg',
    title: 'Indoor-Outdoor Storefront',
    desc: 'Blending natural light with luxury interiors for a unique experience.',
  },
  {
    img: 'shop (8).jpg',
    title: 'Urban Chic Store',
    desc: 'A stylish and vibrant retail space tailored for modern lifestyles.',
  },
  {
    img: 'shop (9).jpg',
    title: 'Classic Meets Modern',
    desc: 'Where timeless retail design merges with contemporary aesthetics.',
  },
  {
    img: 'shop (10).jpg',
    title: 'Premium Shopping Ambience',
    desc: 'A luxurious store design combining elegance, comfort, and service.',
  },
];

const ShopPage = () => {
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
          <h1>Shop</h1>
        </div>
        <img
          src="shop (1).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      {/* Intro Text Section */}
      <div className="livingroom-text">
        <h1>Customized Shop Interior Designs</h1>

        <div className="living-images-type">
          <div className="living-image-card">
            <img src="shop (12).jpg" alt="" />
            <p>Stylish Display Shelves</p>
          </div>
          <div className="living-image-card">
            <img src="shop (14).jpg" alt="" />
            <p>Modern Cash Counter Design</p>
          </div>
          <div className="living-image-card">
            <img src="shop (13).jpg" alt="" />
            <p>Open and Spacious Store Layout</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Shop Design?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Discover the 360Concepts Advantage</h2>
            <p>
              At 360Concepts, we create engaging shop designs that attract
              customers and boost sales. Our focus is on delivering creative,
              functional, and visually stunning spaces that leave lasting
              impressions.
            </p>
          </div>
          <div className="images-living-working">
            <img src="shop (12).jpg" alt="Shop Design" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="workingSteps-living">
        <h3>Here’s what makes 360Concepts the best choice:</h3>
        <div className="steps">
          {[
            'Expert Retail Design',
            'Tailored Store Ambience',
            'Customer-Centric Layouts',
            'Eco-Friendly Materials',
            'Complete Design & Build',
            'Exceptional Service',
            'Flexible Customization',
            'Affordable Luxury',
          ].map((title, index) => (
            <div className="feature-card" key={index}>
              <h5>{title}</h5>
              <p>
                Experience innovative and practical store designs that ensure
                your retail space stands out with elegance and efficiency.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Gallery Section */}
      <div className="living-container">
        {shopData.map((item, index) => (
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

export default ShopPage;

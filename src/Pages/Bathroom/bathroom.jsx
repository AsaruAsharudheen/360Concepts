import { useState } from 'react';
import './bathroom.css';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const bathroomData = [
  {
    img: 'bathrroms (1).jpg',
    title: 'Modern Bathroom 1',
    desc: 'Minimalist design with sleek fittings and glass partition.',
  },
  {
    img: 'bathrroms (2).jpg',
    title: 'Luxury Vanity 2',
    desc: 'Double sink vanity with stylish lighting and storage.',
  },
  {
    img: 'bathrroms (3).jpg',
    title: 'Compact Elegance 3',
    desc: 'Ideal for small spaces without compromising style.',
  },
  {
    img: 'bathrroms (4).jpg',
    title: 'Textured Walls 4',
    desc: 'Modern textures and tiles for a luxurious touch.',
  },
  {
    img: 'bathrroms (5).jpg',
    title: 'Zen Retreat 5',
    desc: 'A calming bathroom with natural tones and clean lines.',
  },
  {
    img: 'bathrroms (6).jpg',
    title: 'Functional Space 6',
    desc: 'Built-in cabinets and mirrors for optimized use.',
  },
  {
    img: 'bathrroms (7).jpg',
    title: 'Black & White Theme 7',
    desc: 'Bold color contrast with premium fixtures.',
  },
  {
    img: 'bathrroms (8).jpg',
    title: 'Open Shower Area 8',
    desc: 'Spacious shower with rainhead and glass divider.',
  },
  {
    img: 'bathrroms (9).jpg',
    title: 'Traditional Style 9',
    desc: 'Warm tiles and curved fittings for a cozy appeal.',
  },
  {
    img: 'bathrroms (10).jpg',
    title: 'Spa Inspired 10',
    desc: 'Relaxing ambiance with light wood and neutral hues.',
  },
];

const Bathroom = () => {
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
          <h1>Bathroom</h1>
        </div>
        <img
          src="bathrroms (1).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      <div className="livingroom-text">
        <h1>Smart & Stylish Bathroom Interiors</h1>
        <p>
          Whether you’re looking for a compact solution or a luxurious bath
          space, 360Concepts offers bathroom interiors that reflect modern
          living. Our solutions focus on beauty, efficiency, and wellness.
        </p>
        <p>
          With water-resistant finishes, modular vanities, and thoughtful
          lighting, our designs balance form and function perfectly — turning
          your bathroom into a private retreat.
        </p>

        <div className="living-images-type">
          <div className="living-image-card">
            <img src="bathrroms (11).jpg" alt="" />
            <p>Glass-Enclosed Shower Cabin</p>
          </div>
          <div className="living-image-card">
            <img src="bathrroms (12).jpg" alt="" />
            <p>Floating Vanity with LED Mirror</p>
          </div>
          <div className="living-image-card">
            <img src="bathrroms (13).jpg" alt="" />
            <p>Storage-Optimized Washbasin Area</p>
          </div>
        </div>
      </div>

      <div className="workingliving">
        <h1>Why Choose 360Concepts for Bathroom Design?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Relaxation & Functionality Combined</h2>
            <p>
              Our bathroom interiors are tailored to blend aesthetics with
              functionality. With smart storage, modern textures, and
              comfort-focused layouts, 360Concepts helps you craft bathrooms
              that refresh and inspire.
            </p>
          </div>
          <div className="images-living-working">
            <img src="bathrroms (5).jpg" alt="Bathroom Design" />
          </div>
        </div>
      </div>

      <div className="workingSteps-living">
        <h3>Features That Define Our Bathroom Designs</h3>
        <div className="steps">
          {[
            'Water-Resistant Finishes',
            'Easy-to-Clean Surfaces',
            'Space Optimization',
            'Luxury Fittings',
            'Natural Light Use',
            'Modular Vanity Units',
            'Elegant Tiles and Colors',
            'Affordable Smart Solutions',
          ].map((title, i) => (
            <div className="feature-card" key={i}>
              <h5>{title}</h5>
              <p>
                Get the perfect blend of beauty and functionality in your bath
                space.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="living-container">
        {bathroomData.map((item, index) => (
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
            <img src={selectedImg} alt="Bathroom Zoom" />
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

export default Bathroom;

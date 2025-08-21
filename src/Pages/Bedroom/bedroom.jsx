import { useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import './bedroom.css';
import LastAbout from '../Last/lastAbout';

import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const bedroomData = [
  {
    img: 'bedroom (1).jpg',
    title: 'Modern Bedroom 1',
    desc: 'Elegant space with modern furniture and soft lighting.',
  },
  {
    img: 'bedroom (2).jpg',
    title: 'Classic Comfort 2',
    desc: 'A mix of tradition and comfort in design and decor.',
  },
  {
    img: 'bedroom (3).jpg',
    title: 'Minimal Design 3',
    desc: 'Clean lines, minimal accessories, and neutral tones.',
  },
  {
    img: 'bedroom (4).jpg',
    title: 'Cozy Corner 4',
    desc: 'Warm textures and ambient lighting create a cozy retreat.',
  },
  {
    img: 'bedroom (5).jpg',
    title: 'Luxury Touch 5',
    desc: 'Luxurious bedding and premium materials throughout.',
  },
  {
    img: 'bedroom (6).jpg',
    title: 'Urban Bedroom 6',
    desc: 'Sleek styling with compact city-living appeal.',
  },
  {
    img: 'bedroom (7).jpg',
    title: 'Nature Blend 7',
    desc: 'Earthy tones and natural wood accents.',
  },
  {
    img: 'bedroom (8).jpg',
    title: 'Smart Space 8',
    desc: 'Technology meets comfort in this smart home design.',
  },
  {
    img: 'bedroom (9).jpg',
    title: 'Royal Feel 9',
    desc: 'A touch of royalty with rich textures and tones.',
  },
  {
    img: 'bedroom (10).jpg',
    title: 'Peaceful Night 10',
    desc: 'Designed for optimal relaxation and sleep comfort.',
  },
];

const BedRoom = () => {
  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = img => {
    setModalImage(img);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setModalImage('');
  };

  return (
    <>
      <div className="contact-header-modern-living">
        <div className="header-overlay-living">
          <h1>Bedroom</h1>
        </div>
        <img
          src="bedroom (2).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      <div className="livingroom-text">
        <h1>Custom Bedroom Designs for Restful Living</h1>
        <p>
          Discover bedrooms that blend tranquility and luxury with 360Concepts’s
          bespoke bedroom designs. Whether you crave a cozy corner or a modern
          suite, our experts will help you design a personal retreat.
        </p>
        <p>
          From classic cots and modular wardrobes to innovative dressing units
          and kids’ bedroom sets, we customize every element to reflect your
          lifestyle and ensure peaceful sleep and functional beauty.
        </p>
        <div className="living-images-type">
          <div className="living-image-card">
            <img src="bedroom (12).jpg" alt="" />
            <p>Modern Cot with Headboard Storage</p>
          </div>
          <div className="living-image-card">
            <img src="bedroom (13).jpg" alt="" />
            <p>Sliding Wardrobe with Mirror Finish</p>
          </div>
          <div className="living-image-card">
            <img src="bedroom (14).jpg" alt="" />
            <p>Elegant Dressing Table with Drawers</p>
          </div>
        </div>
      </div>

      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Bedroom Interior?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Comfort Meets Style in Every Detail</h2>
            <p>
              Your bedroom is your sanctuary. With 360Concepts, you get timeless
              aesthetics, smart storage, and unmatched comfort. We create
              customized spaces that soothe and inspire, ensuring every morning
              and night feels special. Trust us to deliver cozy elegance through
              tailor-made furnishings.
            </p>
          </div>
          <div className="images-living-working">
            <img src="bedroom (15).jpg" alt="Bedroom Design" />
          </div>
        </div>
      </div>

      <div className="workingSteps-living">
        <h3>Here’s what makes 360Concepts ideal for your bedroom setup:</h3>
        <div className="steps">
          {[
            'Comfort-Focused Designs',
            'High-Quality Materials',
            'Custom Storage Solutions',
            'Serene Color Palettes',
            'Innovative Layouts',
            'End-to-End Project Support',
            'Premium Finishes',
            'Tailored to All Age Groups',
          ].map((title, i) => (
            <div className="feature-card" key={i}>
              <h5>{title}</h5>
              <p>
                Experience luxury and function with our expert craftsmanship and
                thoughtful design solutions.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="living-container">
        {bedroomData.map((item, index) => (
          <div
            key={index}
            className={`living-card ${
              index % 2 === 0 ? 'left-image' : 'right-image'
            }`}
            onClick={() => openModal(item.img)}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.img} alt={item.title} className="living-image" />
            <div className="living-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {visible && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <img src={modalImage} alt="Enlarged View" />
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
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

export default BedRoom;

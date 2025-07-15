import { useState } from 'react';
import './kitchen.css';

const kitchenData = [
  {
    img: '/public/kitchen (1).jpg',
    title: 'Modular Kitchen Design 1',
    desc: 'Efficient and elegant kitchen setup with modern storage solutions.',
  },
  {
    img: '/public/kitchen (2).jpg',
    title: 'Luxury Kitchen 2',
    desc: 'Crafted with premium materials and excellent lighting.',
  },
  {
    img: '/public/kitchen (3).jpg',
    title: 'Sleek Cabinets 3',
    desc: 'Smooth-finish cabinets that maximize space and style.',
  },
  {
    img: '/public/kitchen (4).jpg',
    title: 'Open Plan Kitchen 4',
    desc: 'Functional layout with dining integration.',
  },
  {
    img: '/public/kitchen (5).jpg',
    title: 'Minimalist Touch 5',
    desc: 'Simple, clean lines with ample natural light.',
  },
  {
    img: '/public/kitchen (6).jpg',
    title: 'Island Counter Kitchen 6',
    desc: 'Elegant kitchen with centered island for prep and dining.',
  },
  {
    img: '/public/leaving (7).jpg',
    title: 'Mixed Use Kitchen 7',
    desc: 'Combines wood textures with modern tech.',
  },
  {
    img: '/public/leaving (8).jpg',
    title: 'Smart Kitchen 8',
    desc: 'Built-in appliances and smart lighting system.',
  },
  {
    img: '/public/leaving (9).jpg',
    title: 'Traditional Look 9',
    desc: 'Classic cabinets with modern upgrades.',
  },
  {
    img: '/public/kitchen (10).jpg',
    title: 'Premium Finish 10',
    desc: 'Stylish surfaces with top-tier fittings.',
  },
];

const Kitchen = () => {
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      

      <div className="contact-header-modern-living">
        <div className="header-overlay-living">
          <h1>Kitchen</h1>
        </div>
        <img
          src="/public/kitchen (2).jpg"
          alt="Header Background"
          className="header-background-image-living"
        />
      </div>

      <div className="livingroom-text">
        <h1>Stylish & Functional Kitchen Designs</h1>
        <p>
          At 360Concepts, we believe your kitchen should be both functional and
          beautiful. Our bespoke kitchen designs combine modern innovations with
          timeless style — tailored to your space, lifestyle, and taste.
        </p>
        <p>
          From smart storage to sleek countertops and elegant finishes, our
          designs reflect a perfect blend of utility and elegance. Whether you
          prefer an island kitchen, U-shaped, or L-shaped setup, we craft
          stunning solutions that inspire culinary creativity and everyday
          comfort.
        </p>
        <div className="living-images-type">
          <div className="living-image-card">
            <img
              src="/public/kitchen explain (1).jpg"
              alt=""
              onClick={() => openImageModal('/public/kitchen explain (1).jpg')}
            />
            <p>Modular Kitchen with Overhead Cabinets</p>
          </div>
          <div className="living-image-card">
            <img
              src="/public/kitchen explain (2).jpg"
              alt=""
              onClick={() => openImageModal('/public/kitchen explain (2).jpg')}
            />
            <p>Island Kitchen with Pendant Lights</p>
          </div>
          <div className="living-image-card">
            <img
              src="/public/kitchen explain (3).jpg"
              alt=""
              onClick={() => openImageModal('/public/kitchen explain (3).jpg')}
            />
            <p>Compact Kitchen with Smart Storage</p>
          </div>
        </div>
      </div>

      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Kitchen?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Functionality Meets Elegance</h2>
            <p>
              Our expert team designs kitchens that make cooking a joy. From
              thoughtful layouts to premium finishes and high-end fittings, we
              deliver quality, beauty, and comfort. 360Concepts ensures every
              inch of your kitchen is utilized to its fullest potential — in
              style.
            </p>
          </div>
          <div className="images-living-working">
            <img
              src="/public/kitchen interior.jpg"
              alt="Kitchen Interior"
              onClick={() => openImageModal('/public/kitchen interior.jpg')}
            />
          </div>
        </div>
      </div>

      <div className="workingSteps-living">
        <h3>What Makes 360Concepts Kitchens Exceptional?</h3>
        <div className="steps">
          {[
            {
              title: 'Smart Storage Solutions',
              desc: 'From pull-out drawers to corner units, our designs maximize storage efficiently.',
            },
            {
              title: 'Durable Materials',
              desc: 'We use water-resistant, heat-proof, and durable finishes to ensure long life.',
            },
            {
              title: 'Custom Countertops',
              desc: 'Granite, quartz, or laminate — tailored to suit your design and cooking habits.',
            },
            {
              title: 'Efficient Layouts',
              desc: 'Designed for your movement flow, ensuring comfort and accessibility.',
            },
            {
              title: 'Premium Hardware',
              desc: 'Soft-close drawers, branded hinges, and easy-glide runners included.',
            },
            {
              title: 'Beautiful Lighting',
              desc: 'Task and ambient lighting to set the mood and assist cooking.',
            },
            {
              title: 'Tailored to You',
              desc: 'From color to configuration, every element is crafted for your lifestyle.',
            },
            {
              title: 'Budget-Friendly Luxury',
              desc: 'Achieve premium looks and features without breaking the bank.',
            },
          ].map((item, index) => (
            <div className="feature-card" key={index}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="living-container">
        {kitchenData.map((item, index) => (
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
              onClick={() => openImageModal(item.img)}
            />
            <div className="living-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <img src={modalImage} alt="Full View" />
        </div>
      )}
    </>
  );
};

export default Kitchen;

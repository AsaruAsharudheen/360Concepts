import { useState } from 'react';
import '../LivingRooms/living.css'; // ✅ Reuse same CSS classes
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const instituteData = [
  {
    img: 'institute (1).jpg',
    title: 'Modern Classroom Design',
    desc: 'Smart and engaging classroom layouts for effective learning.',
  },
  {
    img: 'institute (2).jpg',
    title: 'Collaborative Spaces',
    desc: 'Interactive areas to encourage teamwork and creativity.',
  },
  {
    img: 'institute (3).jpg',
    title: 'Technology-Enabled Learning',
    desc: 'State-of-the-art digital tools for innovative education.',
  },
  {
    img: 'institute (4).jpg',
    title: 'Library & Study Zones',
    desc: 'Calm, resourceful spaces designed to inspire students.',
  },
  {
    img: 'institute (5).jpg',
    title: 'Student Lounges',
    desc: 'Comfortable and welcoming environments for relaxation.',
  },
  {
    img: 'institute (6).jpg',
    title: 'Auditorium & Halls',
    desc: 'Spacious venues perfect for lectures, events, and seminars.',
  },
  {
    img: 'institute (7).jpg',
    title: 'Sports & Recreation',
    desc: 'Facilities promoting fitness, teamwork, and holistic growth.',
  },
];

const InstitutePage = () => {
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
          <h1>Institute</h1>
        </div>
        <img
          src="institute (2).jpg"
          alt="Institute Background"
          className="header-background-image-living"
        />
      </div>

      {/* Intro Section */}
      <div className="livingroom-text">
        <h1>Customized Institute Interior Designs</h1>

        <div className="living-images-type">
          <div className="living-image-card">
            <img src="institute (1).jpg" alt="" />
            <p>Innovative Classroom Spaces</p>
          </div>
          <div className="living-image-card">
            <img src="institute (2).jpg" alt="" />
            <p>Interactive Learning Areas</p>
          </div>
          <div className="living-image-card">
            <img src="institute (3).jpg" alt="" />
            <p>Modern Library Design</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="workingliving">
        <h1>Why Choose 360Concepts for Your Institute?</h1>
        <div className="contents-living">
          <div className="text-living">
            <h2>Transform Education Spaces with 360Concepts</h2>
            <p>
              We design institutes that foster creativity, productivity, and
              effective learning. From classrooms to auditoriums, our designs
              create inspiring environments for both students and educators.
            </p>
          </div>
          <div className="images-living-working">
            <img src="institute (5).jpg" alt="Institute Design" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="workingSteps-living">
        <h3>Here’s what makes our institute designs exceptional:</h3>
        <div className="steps">
          {[
            'Innovative Classrooms',
            'Student-Centric Layouts',
            'Advanced Technology Integration',
            'Calm & Focused Study Areas',
            'Modern Labs & Workshops',
            'Holistic Recreational Spaces',
            'Affordable & Sustainable Designs',
            'End-to-End Solutions',
          ].map((title, index) => (
            <div className="feature-card" key={index}>
              <h5>{title}</h5>
              <p>
                Our institute interiors are designed to enhance learning,
                creativity, and community spirit with modern, practical, and
                inspiring concepts.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="living-container">
        {instituteData.map((item, index) => (
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

export default InstitutePage;

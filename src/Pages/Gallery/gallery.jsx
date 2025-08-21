import { useState } from 'react';
import './gallery.css';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [];
  for (let i = 1; i <= 10; i++) {
    images.push(`/kitchen (${i}).jpg`);
    images.push(`/leaving (${i}).jpg`);
    images.push(`/bedroom (${i}).jpg`);
    images.push(`/restaurant (${i}).jpg`);
    images.push(`/shop (${i}).jpg`);
    images.push(`/institute (${i}).jpg`);
  }

  return (
    <>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-item" key={index} onClick={() => setSelectedImage(img)}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Full View" className="modal-image" />
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

export default Gallery;

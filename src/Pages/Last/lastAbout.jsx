import InteriorTeam from '../InteriorTeam/team';
import './lastAbout.css';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from '@ant-design/icons';

const LastAbout = () => {
  return (
    <>
      <div className="contact-header-modern">
        <div className="header-overlay">
          <h1>About Us</h1>
        </div>
        <img
          src="/aboutus.jpg"
          alt="Header Background"
          className="header-background-image"
        />
        <div className="estimate-badge">FREE ESTIMATE</div>
      </div>
      <InteriorTeam />
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
              <FacebookFilled />
              <TwitterSquareFilled />
              <InstagramFilled />
              <LinkedinFilled />
              <YoutubeFilled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastAbout;

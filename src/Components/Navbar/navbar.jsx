import { Typography } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const { Text } = Typography;

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    setVisible(false);
    setDropdownOpen(false);
    setDesktopDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 300); // Delay before hiding
  };

  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <h1>
            <span style={{ color: '#007acc' }}>360</span>
            <span style={{ color: '#333' }}>Concepts</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="others desktop-menu">
          <Text onClick={() => navigate('/')} className="nav-link">HOME</Text>
          <Text onClick={() => navigate('/about')} className="nav-link">ABOUT</Text>
          <Text onClick={() => navigate('/models')} className="nav-link">3D MODELS</Text>

          <div
            className="nav-link dropdown-desktop"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            PRODUCTS <DownOutlined style={{ fontSize: 10 }} />
            {desktopDropdownOpen && (
              <div className="dropdown-content">
                <p onClick={() => handleNavigate('/living')}>Living Room</p>
                <p onClick={() => handleNavigate('/kitchen')}>Kitchen</p>
                <p onClick={() => handleNavigate('/bedroom')}>Bedroom</p>
                <p onClick={() => handleNavigate('/dining')}>Dining Room</p>
                <p onClick={() => handleNavigate('/bathroom')}>Bathrooms</p>
              </div>
            )}
          </div>

          <Text onClick={() => navigate('/gallery')} className="nav-link">GALLERY</Text>
          <Text onClick={() => navigate('/contactUs')} className="nav-link">CONTACT</Text>
        </div>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setVisible(true)}>
          <MenuOutlined style={{ fontSize: '24px' }} />
        </div>
      </div>

      {/* Mobile Modal */}
      {visible && (
        <div className="mobile-modal">
          <div className="modal-close" onClick={() => setVisible(false)}>×</div>

          <div className="modal-links">
            <p onClick={() => handleNavigate('/')}>HOME</p>
            <p onClick={() => handleNavigate('/about')}>ABOUT</p>
            <p onClick={() => handleNavigate('/models')}>3D MODELS</p>

            <div className="dropdown-mobile">
              <p onClick={() => setDropdownOpen(!dropdownOpen)}>
                PRODUCTS{' '}
                <DownOutlined
                  style={{
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </p>
              {dropdownOpen && (
                <div className="dropdown-items">
                  <p onClick={() => handleNavigate('/living')}>Living Room</p>
                  <p onClick={() => handleNavigate('/kitchen')}>Kitchen</p>
                  <p onClick={() => handleNavigate('/bedroom')}>Bedroom</p>
                  <p onClick={() => handleNavigate('/dining')}>Dining Room</p>
                  <p onClick={() => handleNavigate('/bathroom')}>Bathrooms</p>
                </div>
              )}
            </div>

            <p onClick={() => handleNavigate('/gallery')}>GALLERY</p>
            <p onClick={() => handleNavigate('/contactUs')}>CONTACT</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

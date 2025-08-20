import React from 'react';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './contacticons.css';

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      {/* Call Icon */}


      {/* WhatsApp Icon */}
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/919778169580?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services"
          target="_blank"
          rel="noopener noreferrer"
          title="Send WhatsApp Message"
        >
          
          <WhatsAppOutlined />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;

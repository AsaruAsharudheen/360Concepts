import { useState } from 'react';
import LastAbout from '../Last/lastAbout';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pincode: '',
    status: '',
    type: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { name, phone, email, pincode, status, type } = formData;

    const message = `*New Inquiry from Website*%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Email:* ${email}%0A
*Pincode:* ${pincode}%0A
*Project Status:* ${status}%0A
*Type:* ${type}`;

    const whatsappUrl = `https://wa.me/919778169580?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="contact-header-modern">
        <div className="header-overlay">
          <h1>Contact Us</h1>
        </div>
        <img
          src="/aboutus.jpg"
          alt="Header Background"
          className="header-background-image"
        />
        <div className="estimate-badge">FREE ESTIMATE</div>
      </div>

      <div className="contact-wrapper">
        <div className="leftside-Contact">
          <div className="heading-contact">
            <h2>Want to chat further?</h2>
            <h2>We'd love to hear from you.</h2>
          </div>
          <form className="contact-form" onSubmit={sendToWhatsApp}>
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="phone" type="number" placeholder="Contact Number" value={formData.phone} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input name="pincode" type="text" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
            <input name="status" type="text" placeholder="Project Status" value={formData.status} onChange={handleChange} />
            <input name="type" type="text" placeholder="Type" value={formData.type} onChange={handleChange} />
            <button type="submit">Send via WhatsApp</button>
          </form>
        </div>

        <div className="rightside-Contact">
          <div className="locationMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      <LastAbout />
    </>
  );
};

export default Contact;

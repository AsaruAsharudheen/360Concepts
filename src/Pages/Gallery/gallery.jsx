import { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [];
  for (let i = 1; i <= 10; i++) {
    images.push(`/kitchen (${i}).jpg`);
    images.push(`/leaving (${i}).jpg`);
    images.push(`/bedroom (${i}).jpg`);
    images.push(`/bathroom (${i}).jpg`);
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
    </>
  );
};

export default Gallery;

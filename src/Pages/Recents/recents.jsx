import { useState, useEffect } from 'react';
import './recents.css';
import { useNavigate } from 'react-router-dom';

const Recents = () => {
  const cards = [
      {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
    {
      video: 'v001.mp4',
      title: 'Simple Nest Appartments',
      location: 'Ganesh Giri, Shornur',
      image: [
        'bathroom (12).jpg',
        'bedroom (7).jpg',
        'dining (6).jpg',
        'kitchen (7).jpg',
        'leaving (9).jpg',
      ],
    },
    {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
    {
      video: 'v004.mp4',
      title: 'Cozy Family Space',
      location: 'JK Heights, Kochi',
      image: [
        'bathroom (10).jpg',
        'bedroom (5).jpg',
        'dining (4).jpg',
        'kitchen (5).jpg',
        'leaving (7).jpg',
      ],
    },
    {
      video: 'v005.mp4',
      title: 'Luxe Wooden Interior',
      location: 'Sunshine Villa, Calicut',
      image: [
        'bathroom (9).jpg',
        'bedroom (4).jpg',
        'dining (3).jpg',
        'kitchen (4).jpg',
        'leaving (6).jpg',
      ],
    },
      {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
    {
      video: 'v004.mp4',
      title: 'Simple Nest Appartments',
      location: 'Ganesh Giri, Shornur',
      image: [
        'bathroom (8).jpg',
        'bedroom (3).jpg',
        'dining (2).jpg',
        'kitchen (3).jpg',
        'leaving (5).jpg',
      ],
    },
    {
      video: 'v001.mp4',
      title: 'Urban Style Suite',
      location: 'Metro City, Ernakulam',
      image: [
        'bathroom (12).jpg',
        'bedroom (7).jpg',
        'dining (6).jpg',
        'kitchen (7).jpg',
        'leaving (9).jpg',
      ],
    },
      {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
    {
      video: 'v004.mp4',
      title: 'Minimalist Lounge',
      location: 'Palm County, Palakkad',
      image: [
        'bathroom (12).jpg',
        'bedroom (7).jpg',
        'dining (6).jpg',
        'kitchen (7).jpg',
        'leaving (9).jpg',
      ],
    },
      {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
    {
      video: 'v001.mp4',
      title: 'Artistic Living Room',
      location: 'Heavenly Homes, Trivandrum',
      image: [
        'bathroom (12).jpg',
        'bedroom (7).jpg',
        'dining (6).jpg',
        'kitchen (7).jpg',
        'leaving (9).jpg',
      ],
    },
      {
      video: 'v002.mp4',
      title: 'Modern Studio Room',
      location: 'Rahman Villa, Malappuram',
      image: [
        'bathroom (11).jpg',
        'bedroom (8).jpg',
        'dining (7).jpg',
        'kitchen (6).jpg',
        'leaving (8).jpg',
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleViewMore = index => {
    navigate(`/project/${index}`, { state: { data: cards[index] } });
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="recents-wrapper">
      <h2 className="section-title">Successful Projects</h2>
      <div className="recents-marquee">
        <div className={isMobile ? 'mobile-scroll' : 'marquee-track'}>
          {cards
            .filter(card => card.video) // Only include cards that have a video
            .map((card, index) => (
              <div className="recent-card" key={index}>
                <video
                  src={`/${card.video}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="media-element"
                  onContextMenu={e => e.preventDefault()}
                />
                <div className="card-info">
                  <h3>{card.title}</h3>
                  <p>{card.location}</p>
                  <button
                    onClick={() => handleViewMore(index)}
                    className="view-more-btn"
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recents;

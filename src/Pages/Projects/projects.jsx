import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-img">
        {[
          'projects (1).jpg',
          'projects (2).jpg',
          'projects (3).jpg',
          'projects (4).jpg',
          'projects (5).jpg',
          'projects (6).jpg',
        ].map((img, index) => (
          <div className="project-card" data-aos="zoom-in" key={index}>
            <img src={`/public/${img}`} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

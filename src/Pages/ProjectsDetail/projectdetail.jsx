import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './projectdetail.css';

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  if (!data) return <div>Project not found</div>;

  return (
    <div className="project-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>{data.title}</h1>
      <p className="location">{data.location}</p>

      <video src={`/${data.video}`} controls className="detail-video" />

      <div className="image-gallery">
        {data.image.map((img, i) => (
          <img key={i} src={`/${img}`} alt={`Project Image ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;

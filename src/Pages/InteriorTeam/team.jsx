import './team.css';

const teamMembers = [
  {
    img: 'persons (4).jpg',
    name: 'David Smith',
    role: 'Interior',
    desc: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    img: 'Haseeb.png',
    name: 'Haseeb',
    role: 'Interior',
    desc: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    img: 'persons (2).jpg',
    name: 'David Smith',
    role: 'Interior',
    desc: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    img: 'persons (1).jpg',
    name: 'David Smith',
    role: 'Interior',
    desc: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

const InteriorTeam = () => {
  return (
    <div className="team-section">
      <h2>Our Interior Team</h2>
      <p className="team-subtitle">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={`/public/${member.img}`} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.desc}</p>
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorTeam;

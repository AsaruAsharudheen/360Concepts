import Navbar from '../../Components/Navbar/navbar';
import LastAbout from '../Last/lastAbout';
import ThirdPage from '../Third/third';
import { PhoneOutlined } from '@ant-design/icons';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from '@ant-design/icons';

import './home.css';
import Projects from '../Projects/projects';
import Recents from '../Recents/recents';
import HomeImg from '../../Components/HomeImage/homeimg';
import InteriorTeam from '../InteriorTeam/team';

const Home = () => {
  return (
    <>
      <HomeImg />
      <div className="home">
        <Recents />

        <div className="image">
          <img src="pexels-jvdm-1454805.jpg" alt="" />
        </div>
        <div className="imageAbout">
          <h1>Welcome to 360Concepts Interiors</h1>
          <p>
            We began our journey a decade back in 2011, with a team of dedicated
            professionals and talented designers. Our diligent efforts clubbed
            with passion for designing upheld the brand and we emerged as the
            No.1 interior designer in South India. Phenomenal designs and unique
            finishes have always been our forte. With great support and hard
            work of the 500+ employees, we manufacture customised products with
            high quality materials from our collection. At 360InfoMedia, every
            work is made remarkable and that makes 360 the best. Our materials
            are tested to suit the drastic climatic variations in the region. We
            do interiors for home, offices, and commercial spaces blending
            expertise and art. Our state-of-the-art German Equipments and
            Craftsmanship help create products that are durable and unique. We
            design beyond your dreams. Contact us and get your free quote today!
          </p>
        </div>
      </div>
      <div className="secondPage">
        <div className="secondImages">
          <div className="imageBox">
            <img src="pexels-houzlook-3356416.jpg" alt="South India" />
            <div className="imageOverlayText">ALL OVER SOUTH INDIA</div>
          </div>
          <div className="imageBox">
            <img src="pexels-medhat-ayad-122846-439227.jpg" alt="Finishes" />
            <div className="imageOverlayText">15 TYPES OF FINISHES</div>
          </div>
          <div className="imageBox">
            <img src="pexels-pixabay-161758.jpg" alt="Customized" />
            <div className="imageOverlayText">CUSTOMIZED DESIGNS</div>
          </div>
        </div>
      </div>
      {/* <Projects /> */}
      <div className="SecondAbout">
        <h1>How We Work</h1>
        <p>
          Our workflow is very well defined and leaves no grey areas. From the
          very moment a client approaches RAK, a dedicated staff will assist
          them throughout the process. From discussing your requirements to
          designing and execution, we walk together with our clients to ensure
          satisfaction and the best client experience when designing their home
          interiors.
        </p>
      </div>
      <div className="workingSteps">
        <div className="stepCard">
          <h1>.01</h1>
          <h2>UNDERSTANDING CLIENT NEEDS</h2>
          <p>
            Our sales team comprises of patient listeners who will absorb and
            analyse the client's requirements in detail.
          </p>
        </div>
        <div className="stepCard">
          <h1>.02</h1>
          <h2>SPACE PLANNING</h2>
          <p>
            We plan the layout and functional aspects keeping beauty, flow, and
            space utilization in mind.
          </p>
        </div>
        <div className="stepCard">
          <h1>.03</h1>
          <h2>3D VISUALIZATION</h2>
          <p>
            We present the design concepts visually for better clarity and
            client satisfaction.
          </p>
        </div>
        <div className="stepCard">
          <h1>.04</h1>
          <h2>MATERIAL SELECTION</h2>
          <p>
            We help you choose durable, aesthetic materials that align with your
            taste and budget.
          </p>
        </div>
        <div className="stepCard">
          <h1>.05</h1>
          <h2>MANUFACTURING</h2>
          <p>
            State-of-the-art machinery and craftsmanship come together to build
            your dream interior.
          </p>
        </div>
        <div className="stepCard">
          <h1>.06</h1>
          <h2>INSTALLATION & HANDOVER</h2>
          <p>
            Our skilled team completes the project with care and hands it over
            on time.
          </p>
        </div>
      </div>
      <ThirdPage />

      <div className="LastImage">
        <img src="pexels-falling4utah-2724749.jpg" alt="" />
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
      {/* <LastAbout /> */}
    </>
  );
};

export default Home;

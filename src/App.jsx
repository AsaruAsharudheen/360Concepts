import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/navbar';
import Home from './Pages/Home/home';
import LivingRoom from './Pages/LivingRooms/living';
import Kitchen from './Pages/Kitchen/kitchen';
import BedRoom from './Pages/Bedroom/bedroom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LastAbout from './Pages/Last/lastAbout';
import Gallery from './Pages/Gallery/gallery';
import Contact from './Pages/ContactUs/contact';
import Dining from './Pages/Dining/dining';
import Bathroom from './Pages/Bathroom/bathroom';
import ContactIcons from './Components/ContactIcons/contacticons';
import ProjectDetail from './Pages/ProjectsDetail/projectdetail';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });
  }, []);

  return (
    <>
      <NavBar />
      <ContactIcons/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living" element={<LivingRoom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bedroom" element={<BedRoom />} />
        <Route path="/about" element={<LastAbout />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path='/project/:id' element={<ProjectDetail/>}/>
      </Routes>
    </>
  );
};

export default App;

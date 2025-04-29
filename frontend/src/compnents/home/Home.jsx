import React from 'react';
import Home1 from './Home1';
import Home4 from './Home4';
import KoiLogo from './KoiLogo';
import Navbar from '../navbar/Navbar';
import MentalHealthResources from './MentalHealthResources';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='mt-8'>
        <Home1 />
        <KoiLogo />
        <Home4 />
        <MentalHealthResources />
        </div>
        <Footer />
    </div>
  )
}

export default Home
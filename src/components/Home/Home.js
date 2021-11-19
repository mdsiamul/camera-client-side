import React from 'react';
import About from '../About/About';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <About></About>

        </div>
    );
};

export default Home;
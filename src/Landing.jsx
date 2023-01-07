import React from 'react';
import Header from './Header';
import Faq from './Sections/Faq';
import Feature from './Sections/Feature';
import Hero from './Sections/Hero';
import HowWork from './Sections/HowWork';
import Logo from './Sections/Logo';
import ServiceYear from './Sections/ServiceYear';


const Landing = () => {
    return (
        <div >
            <Hero />
            <Logo />
            <Feature />
            <HowWork />
            <Faq />
            <ServiceYear />
        </div>
    );
};

export default Landing;
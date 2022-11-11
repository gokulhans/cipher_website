import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from './Hero';
import Herotwo from './Herotwo';
import Feature from './Feature';
import Featuretwo from './Featuretwo';
import Contact from './../contact/Contact';
import Stats from './Stats';

function Home() {
    return (
        <div>
            {/* <Hero /> */}
            <Herotwo />
            <Feature />
            <Featuretwo />
            <Stats />
            <div id='contact'>
            <Contact />
            </div>
        </div>
    )
}

export default Home
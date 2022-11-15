import React from 'react';
import Classes from '../Pages/Home/classes/Classes.js';
import Hero from '../Pages/Home/hero/Hero.js';
import OurConcept from '../Pages/Home/hero/OurConcept.js';
import OurEconomics from '../Pages/Home/hero/OurEconomics.js';
import OurFeature from '../Pages/Home/hero/OurFeature.js';
import Leaders from '../Pages/Home/leaders/Leaders.js';
import Power from '../Pages/Home/power/Power.js';
import Rising from '../Pages/Home/rising/Rising.js';
import Simple from '../Pages/simple/Simple.js';


const Home = () => {
    return (
        <>
            <Hero />
            <OurFeature></OurFeature>
            <OurConcept></OurConcept>
            <OurEconomics></OurEconomics>
            <Classes></Classes>
            <Leaders></Leaders>
            <Power />
            <Rising />
            <Simple />
        </>
    )
}

export default Home
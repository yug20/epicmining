import React from 'react';
import Header from '../../src/Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Home from './Home.js';

const RouterLink = () => {

    return (
        <>
            <Header></Header>
            <Home />
            <Footer></Footer>
        </>
    );
}

export default RouterLink;
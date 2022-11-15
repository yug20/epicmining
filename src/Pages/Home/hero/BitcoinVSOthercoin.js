import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../Layout/headerFooter.css";
import "./home.css";
import machine from '../../../Assets/Images/machine.png';
import featurimg2 from '../../../Assets/Images/feature2.png';
import featurimg3 from '../../../Assets/Images/feature3.png';


// import { BrowserRouter } from 'browser-router';

const BitcoinVSOthercoin = () => {
    return (
        <>
            <section className='othercoinsection'>
                <Container>
                    <div className="othercointitle">
                        <h3>Bitcoin Vs. Other Asset Classes</h3>
                        <p>Over the past 10 years the returns of bitcoin have beaten the returns of other assets classes by far.</p>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default BitcoinVSOthercoin
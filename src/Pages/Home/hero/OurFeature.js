import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../Layout/headerFooter.css";
import "./home.css";
import featurimg from '../../../Assets/Images/feature.png';
import featurimg2 from '../../../Assets/Images/feature2.png';
import featurimg3 from '../../../Assets/Images/feature3.png';


// import { BrowserRouter } from 'browser-router';

const OurFeature = () => {
    return (
        <>
            <section className='ourfeature'>
                <Container>
                    <div className="featuremain">
                        <div className="featuretitle">
                            <h3>Our Features</h3>
                        </div>
                        <ul className='ourfeaturedetail'>
                            <li>
                                <img src={featurimg} alt="" />
                                <h4>Lorem ipsum dolor</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius risus quis dui iaculis.</p>
                            </li>
                            <li>
                                <img src={featurimg2} alt="" />
                                <h4>Lorem ipsum dolor</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius risus quis dui iaculis.</p>
                            </li>
                            <li>
                                <img src={featurimg3} alt="" />
                                <h4>Lorem ipsum dolor</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius risus quis dui iaculis.</p>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default OurFeature
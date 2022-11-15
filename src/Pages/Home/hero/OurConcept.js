import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../Layout/headerFooter.css";
import "./home.css";
import featurimg from '../../../Assets/Images/feature.png';
import featurimg2 from '../../../Assets/Images/feature2.png';
import featurimg3 from '../../../Assets/Images/feature3.png';


// import { BrowserRouter } from 'browser-router';

const OurConcept = () => {
    return (
        <>
            <section className='ourconcept'>
                <Container>
                    <div className="ourconceptmain">
                        <Row>
                            <Col lg={6}>
                                <div className="concepttitle">
                                    <h3 className='ourconcepttitle'>Our Concept <br></br> & Mission</h3>
                                    <p className='world'>“Epic Mining is on a mission to make Bitcoin Mining
                                        and Investing easier, reliable, more profitable and
                                        accessible for everyone around the world.”</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <ul className='conceptnumber'>
                                    <li><span>160+</span><p>“Epic Mining is on a mission to make Bitcoin Mining
                                        and Investing easier, reliable</p></li>
                                    <li><span>95+</span><p>“Epic Mining is on a mission to make Bitcoin Mining
                                        and Investing easier, reliable</p></li>
                                    <li><span>100+</span><p>“Epic Mining is on a mission to make Bitcoin Mining
                                        and Investing easier, reliable</p></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default OurConcept
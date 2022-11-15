import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../Layout/headerFooter.css";
import "./home.css";
import heroimg from '../../../Assets/Images/heroimg.png';
import coin from '../../../Assets/Images/herocoin.png';
import smallcoin from '../../../Assets/Images/herosmallcoin.png';
import brandimg1 from '../../../Assets/Images/brandimg1.png';
import brandimg2 from '../../../Assets/Images/brandimg2.png';
import brandimg3 from '../../../Assets/Images/brandimg3.png';
import brandimg4 from '../../../Assets/Images/brandimg4.png';
import brandimg5 from '../../../Assets/Images/brandimg5.png';
import OurFeature from './OurFeature';
// import brandimg6 from '../../../Assets/Images/brandimg6.png';

// import { BrowserRouter } from 'browser-router';

const Hero = () => {
    return (
        <>
            <section className='herosection'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="herodetail">
                                <h1>Start <span> Mining </span>
                                    Bitcoin
                                    Right Away</h1>
                                <p>We help you to setup your own Bitcoin mining farm, so you can earn passive income daily.</p>
                                <div className="herobtns">
                                    <Link to="#" className='btnpurple joinnow '><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.4296 2.69883C16.1609 2.4525 15.8073 2.31979 15.4428 2.32853C15.0784 2.33727 14.7315 2.48678 14.4749 2.7457L12.4171 4.80352C12.2704 4.94915 12.1573 5.1252 12.086 5.31925C12.0146 5.5133 11.9866 5.72064 12.0041 5.92666C12.0215 6.13269 12.0839 6.33238 12.1868 6.51169C12.2898 6.69099 12.4308 6.84554 12.5999 6.96445C18.9937 11.4316 26.9953 23.966 27.0749 24.0926C27.1182 24.1588 27.1773 24.2132 27.2469 24.2509C27.3164 24.2885 27.3943 24.3082 27.4734 24.3082C27.5906 24.3071 27.7031 24.2622 27.789 24.1825C27.8748 24.1027 27.9278 23.9937 27.9374 23.877C28.8063 14.9512 19.3332 5.26664 16.4296 2.69883Z" fill="white" />
                                        <path d="M9.1406 18.519L2.62497 25.0347C0.733273 27.0155 3.57912 29.8603 5.55939 27.969L12.075 21.4534C11.6442 21.0214 9.1406 18.519 9.1406 18.519Z" fill="white" />
                                        <path d="M11.4984 16.1614L9.80151 17.8583C10.2355 18.2922 12.7359 20.7926 12.7359 20.7926L14.4328 19.0958C14.0008 18.665 11.4984 16.1614 11.4984 16.1614Z" fill="white" />
                                        <path d="M16.2141 11.4458L12.1641 15.5005C12.5955 15.9319 15.0984 18.4349 15.0984 18.4349L18.9656 14.563C18.2841 13.7422 16.4297 11.6708 16.2141 11.4458Z" fill="white" />
                                        <path d="M23.8734 9.65502L24.7265 8.8019C24.9967 8.53137 25.1484 8.16468 25.1484 7.78237C25.1484 7.40005 24.9967 7.03337 24.7265 6.76284L23.8359 5.86752C23.5601 5.60569 23.1943 5.45972 22.814 5.45972C22.4337 5.45972 22.068 5.60569 21.7922 5.86752L21.2906 6.36909C21.9894 7.18842 23.6859 9.39721 23.8734 9.65502Z" fill="white" />
                                    </svg>
                                        Start Mining Today</Link>
                                    <Link to="#">Discover More</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="heroimg">
                                <img src={heroimg} alt="" />
                                <span className='coin js-logos'><img src={coin} alt="" /></span>
                                <span className='smallcoin'><img src={smallcoin} alt="" /></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="one_brand">
                <Container>
                    <ul className='brand'>
                        <li>
                            <Link to="#"><img src={brandimg1} alt="" /></Link>
                        </li>
                        <li>
                            <Link to="#"><img src={brandimg2} alt="" /></Link>
                        </li>
                        <li>
                            <Link to="#"><img src={brandimg3} alt="" /></Link>
                        </li>
                        <li>
                            <Link to="#"><img src={brandimg4} alt="" /></Link>
                        </li>
                        <li>
                            <Link to="#"><img src={brandimg5} alt="" /></Link>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default Hero
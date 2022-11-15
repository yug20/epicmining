import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./Leaders.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';

class Leaders extends React.Component {

    classis = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1031: {
                items: 1.1,
            },
            1200: {
                items: 1.6,
            },
        },
    }

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://project.delemontstudio.com/epic-mining/bitcoin.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return;

        return (
            <>
                <section className={'leaders'}>
                    <Row>
                        <Col lg={6}>
                            <div className="industry">
                                <h3 className='ourconcepttitle'>Industry Leaders Endorsing</h3>
                                <p className='world'>Many prominent industry leaders have come out and endorsed Bitcoin.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="bitcoin_leaderss">
                                <OwlCarousel
                                    className='owl-theme'
                                    loop
                                    margin={10}
                                    dots={false}
                                    nav={true}
                                    smartSpeed={1000}
                                    responsive={this.classis.responsive}
                                    navText={[`
                                        <span class= "arrow prev" >
                                            <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.1428 27.64C13.7628 27.64 13.3828 27.5 13.0828 27.2L0.942813 15.06C0.362813 14.48 0.362813 13.52 0.942813 12.94L13.0828 0.79999C13.6628 0.21999 14.6228 0.21999 15.2028 0.79999C15.7828 1.37999 15.7828 2.33999 15.2028 2.91999L4.12281 14L15.2028 25.08C15.7828 25.66 15.7828 26.62 15.2028 27.2C14.9228 27.5 14.5228 27.64 14.1428 27.64Z" fill="#515F6A" />
                                                <path d="M36.0037 15.5H2.34375C1.52375 15.5 0.84375 14.82 0.84375 14C0.84375 13.18 1.52375 12.5 2.34375 12.5H36.0037C36.8237 12.5 37.5037 13.18 37.5037 14C37.5037 14.82 36.8237 15.5 36.0037 15.5Z" fill="#515F6A" />
                                            </svg>
                                        </span>`,
                                        `<span class="arrow next">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M28.8622 37.64C28.4822 37.64 28.1022 37.5 27.8022 37.2C27.2222 36.62 27.2222 35.66 27.8022 35.08L38.8822 24L27.8022 12.92C27.2222 12.34 27.2222 11.38 27.8022 10.8C28.3822 10.22 29.3422 10.22 29.9222 10.8L42.0622 22.94C42.6422 23.52 42.6422 24.48 42.0622 25.06L29.9222 37.2C29.6222 37.5 29.2422 37.64 28.8622 37.64Z" fill="#515F6A" />
                                                <path d="M40.66 25.5H7C6.18 25.5 5.5 24.82 5.5 24C5.5 23.18 6.18 22.5 7 22.5H40.66C41.48 22.5 42.16 23.18 42.16 24C42.16 24.82 41.48 25.5 40.66 25.5Z" fill="#515F6A" />
                                            </svg>
                                        </span>
                                    `]}
                                >
                                    {items.leaders.map((data) => {
                                        return (
                                            <>
                                                <div class='item' key={data.id}>
                                                    <div className={data.className}>
                                                        <img src={data.quotes} alt="img" className="quotes" />
                                                        <p>{data.details}</p>
                                                        <div className="leaders_saylor">
                                                            <img src={data.leadersimg} alt="img" />
                                                            <h6>{data.name}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </section>
            </>
        )
    }
}

export default Leaders;
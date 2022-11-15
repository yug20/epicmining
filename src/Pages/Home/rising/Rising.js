import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Rising.css"
import "../classes/Classes.css";

const Rising = () => {
    return (
        <>
            <section className="rising">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="bit_rising_asset">
                                <h3 class="ourconcepttitle"><span>Bitcoin</span> <br /> A Rising Asset Class</h3>
                                <p class="world">Bitcoin has evolved from a niche collectors item into a new recognized asset class with wide adoption.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="adopt">
                                <div className="tender">
                                    <h6 className="years persentage">2021</h6>
                                    <p>First Countries adopt bitcoin as legal tender.</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2020</h6>
                                    <p>Bitcoin surpassed gold’s market cap ($1 trillion) + major institutional adoption (Tesla, Paypal, Square, Microstrategy).</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2019</h6>
                                    <p>5457 Bitcoin ATM’s around the world.</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2018</h6>
                                    <p>First Countries adopt bitcoin as legal tender.</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2021</h6>
                                    <p>First Countries adopt bitcoin as legal tender.</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2020</h6>
                                    <p>Bitcoin surpassed gold’s market cap ($1 trillion) + major institutional adoption (Tesla, Paypal, Square, Microstrategy).</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2019</h6>
                                    <p>5457 Bitcoin ATM’s around the world.</p>
                                </div>
                                <div className="tender">
                                    <h6 className="years persentage">2018</h6>
                                    <p>First Countries adopt bitcoin as legal tender.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Rising
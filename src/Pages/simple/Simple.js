import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import lock from "../../Assets/Images/lock.png"
import "./Simple.css"

const Simple = () => {
    return (
        <>
            <section className="simple">
                <Container>
                    <div className="cursiv_line">
                        <Row>
                            <Col lg={6}>
                                <div className="inner_simple">
                                    <h3 className='ourconcepttitle secure'>A Simple and secure way to earn bitcoin</h3>
                                    <p className='world steps secure'>Get started with mining Bitcoin in just a few simple steps.</p>
                                    <div className="get_touch">
                                        <Link to="/" className='joinnow'>
                                            <span> Start Mining </span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link to="/" className='get_whatsapp'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.98 11.41C21.64 5.60995 16.37 1.13996 10.3 2.13996C6.11998 2.82996 2.76999 6.21994 2.11999 10.3999C1.73999 12.8199 2.24001 15.1099 3.33001 16.9999L2.43999 20.3099C2.23999 21.0599 2.92998 21.7399 3.66998 21.5299L6.92999 20.63C8.40999 21.5 10.14 21.9999 11.99 21.9999C17.63 21.9999 22.31 17.03 21.98 11.41ZM16.88 15.7199C16.79 15.8999 16.68 16.07 16.54 16.23C16.29 16.5 16.02 16.7 15.72 16.82C15.42 16.95 15.09 17.01 14.74 17.01C14.23 17.01 13.68 16.89 13.11 16.64C12.53 16.39 11.96 16.0599 11.39 15.6499C10.81 15.2299 10.27 14.7599 9.74999 14.2499C9.22999 13.7299 8.76997 13.1799 8.34997 12.6099C7.93997 12.0399 7.60999 11.4699 7.36999 10.8999C7.12999 10.3299 7.01 9.77996 7.01 9.25996C7.01 8.91996 7.06999 8.58996 7.18999 8.28996C7.30999 7.97996 7.50001 7.69996 7.77001 7.44996C8.09001 7.12996 8.43999 6.97996 8.80999 6.97996C8.94999 6.97996 9.08996 7.00995 9.21996 7.06995C9.34996 7.12995 9.46999 7.21995 9.55999 7.34995L10.72 8.98994C10.81 9.11994 10.88 9.22994 10.92 9.33994C10.97 9.44994 10.99 9.54994 10.99 9.64994C10.99 9.76994 10.95 9.88996 10.88 10.01C10.81 10.13 10.72 10.2499 10.6 10.3699L10.22 10.7699C10.16 10.8299 10.14 10.8899 10.14 10.9699C10.14 11.0099 10.15 11.0499 10.16 11.0899C10.18 11.1299 10.19 11.16 10.2 11.1899C10.29 11.36 10.45 11.5699 10.67 11.8299C10.9 12.0899 11.14 12.3599 11.4 12.6199C11.67 12.8899 11.93 13.1299 12.2 13.3599C12.46 13.5799 12.68 13.73 12.85 13.82C12.88 13.83 12.91 13.8499 12.94 13.8599C12.98 13.8799 13.02 13.88 13.07 13.88C13.16 13.88 13.22 13.85 13.28 13.79L13.66 13.41C13.79 13.28 13.91 13.19 14.02 13.13C14.14 13.06 14.25 13.0199 14.38 13.0199C14.48 13.0199 14.58 13.0399 14.69 13.0899C14.8 13.1399 14.92 13.2 15.04 13.29L16.7 14.4699C16.83 14.5599 16.92 14.67 16.98 14.79C17.03 14.92 17.06 15.0399 17.06 15.1799C17 15.3499 16.96 15.5399 16.88 15.7199Z" fill="white" />
                                            </svg>
                                            <span>Get in Touch</span>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="lock">
                                    <img src={lock} alt="lock" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Simple

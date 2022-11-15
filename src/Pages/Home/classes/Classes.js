import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import threebitcoin from "../../../Assets/Images/threebitcoin.png";
import "./Classes.css";

const Classes = () => {
    return (
        <>
            <section className="Classes">
                <Container>
                    <div className="bitvsother">
                        <h3 className='ourconcepttitle assetsclass'>Bitcoin Vs. Other Asset Classes</h3>
                        <p className='world returns'>Over the past 10 years the returns of bitcoin have beaten the returns of other assets classes by far.</p>
                    </div>
                    <div className="goldcoin">
                        <ul className='far'>
                            <li className='gold_bitcoin'>
                                <div className="avarage_gold over_gold">
                                    <h6 className="persentage">3.12%</h6>
                                    <span className="coin_name">Gold</span>
                                    <p>The average yearly return over the past 10 years is: 3.12%.</p>
                                </div>
                                <div className="avarage_gold stocks">
                                    <h6 className="persentage">5.6%</h6>
                                    <span className="coin_name">Real estate</span>
                                    <p>Prices of real estate have risen on average over the past 10 years with 5.6%. </p>
                                </div>
                            </li>
                            <li className='gold_bitcoin'>
                                <div className="avarage_gold background_bitcoin">
                                    <h6 className="persentage">230.6%</h6>
                                    <span className="coin_name colorclass">Bitcoin</span>
                                    <p className='bitcoin_years'>The average return of Bitcoin over the past 10 years is 230.6%.</p>
                                </div>
                                <div className="three_bitcoin">
                                    <img src={threebitcoin} alt="img" />
                                </div>
                            </li>
                            <li className='gold_bitcoin'>
                                <div className="avarage_gold over_gold losing_case">
                                    <h6 className="persentage">1.78%</h6>
                                    <span className="coin_name">Cash</span>
                                    <p>Over the past 10 years money is losing on average yearly 1.78% in purchasing power due to inflation.</p>
                                </div>
                                <div className="avarage_gold stocks losing_case">
                                    <h6 className="persentage">14.86%</h6>
                                    <span className="coin_name">Stocks</span>
                                    <p>Over the past 10 years money is losing on average yearly 1.78% in purchasing power due to inflation.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Classes;
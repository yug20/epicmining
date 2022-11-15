import React from 'react'
import { Container } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import "./Power.css";
import "../classes/Classes.css";

class Power extends React.Component {

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
                })
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return;

        return (
            <>
                <section className="mining_power">
                    <Container>
                        <div className="inner_mining_power">
                            <Tabs
                                defaultActiveKey="profile"
                                id="fill-tab-example"
                                // className="mb-3"
                                fill
                            >
                                <Tab eventKey="home" title="Home">
                                    <div className="mining_powers">
                                        <h3 className='ourconcepttitle'>The
                                            <span className="power"> Power ⚡ </span>
                                            of bitcoin
                                            <span className="minig"> Mining</span>
                                        </h3>
                                        <p className='world'>Many prominent industry leaders have come out and endorsed Bitcoin.</p>
                                    </div>
                                    <div className="start_mining">
                                        <Link to="/" class="btnpurple joinnow ">
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4296 2.69883C16.1609 2.4525 15.8073 2.31979 15.4428 2.32853C15.0784 2.33727 14.7315 2.48678 14.4749 2.7457L12.4171 4.80352C12.2704 4.94915 12.1573 5.1252 12.086 5.31925C12.0146 5.5133 11.9866 5.72064 12.0041 5.92666C12.0215 6.13269 12.0839 6.33238 12.1868 6.51169C12.2898 6.69099 12.4308 6.84554 12.5999 6.96445C18.9937 11.4316 26.9953 23.966 27.0749 24.0926C27.1182 24.1588 27.1773 24.2132 27.2469 24.2509C27.3164 24.2885 27.3943 24.3082 27.4734 24.3082C27.5906 24.3071 27.7031 24.2622 27.789 24.1825C27.8748 24.1027 27.9278 23.9937 27.9374 23.877C28.8063 14.9512 19.3332 5.26664 16.4296 2.69883Z" fill="white"></path><path d="M9.1406 18.519L2.62497 25.0347C0.733273 27.0155 3.57912 29.8603 5.55939 27.969L12.075 21.4534C11.6442 21.0214 9.1406 18.519 9.1406 18.519Z" fill="white"></path><path d="M11.4984 16.1614L9.80151 17.8583C10.2355 18.2922 12.7359 20.7926 12.7359 20.7926L14.4328 19.0958C14.0008 18.665 11.4984 16.1614 11.4984 16.1614Z" fill="white"></path><path d="M16.2141 11.4458L12.1641 15.5005C12.5955 15.9319 15.0984 18.4349 15.0984 18.4349L18.9656 14.563C18.2841 13.7422 16.4297 11.6708 16.2141 11.4458Z" fill="white"></path><path d="M23.8734 9.65502L24.7265 8.8019C24.9967 8.53137 25.1484 8.16468 25.1484 7.78237C25.1484 7.40005 24.9967 7.03337 24.7265 6.76284L23.8359 5.86752C23.5601 5.60569 23.1943 5.45972 22.814 5.45972C22.4337 5.45972 22.068 5.60569 21.7922 5.86752L21.2906 6.36909C21.9894 7.18842 23.6859 9.39721 23.8734 9.65502Z" fill="white"></path></svg>Start Mining
                                        </Link>
                                        <Link to="/" className='watch_video'>
                                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24.3064" cy="24" r="24" fill="#45D399" />
                                                <path d="M17.3064 23.9999V20.4399C17.3064 16.0199 20.4364 14.2099 24.2664 16.4199L27.3564 18.1999L30.4464 19.9799C34.2764 22.1899 34.2764 25.8099 30.4464 28.0199L27.3564 29.7999L24.2664 31.5799C20.4364 33.7899 17.3064 31.9799 17.3064 27.5599V23.9999Z" fill="white" />
                                            </svg>
                                            <span>Watch Video</span>
                                        </Link>
                                    </div>
                                    <div className="discount">
                                        <ul className="inner_discount">
                                            {
                                                items.power.map((data) => {
                                                    return (
                                                        <>
                                                            <li className="payouts" key={data.id}>
                                                                <div className="hadge">
                                                                    <div className="passive">
                                                                        <img src={data.images} alt="img" />
                                                                    </div>
                                                                    <div className="discount_title">
                                                                        <h6> {data.title}</h6>
                                                                        <p>{data.description}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <div className="mining_powers">
                                        <h3 className='ourconcepttitle'>The
                                            <span className="power"> Power ⚡ </span>
                                            of bitcoin
                                            <span className="minig"> Mining</span>
                                        </h3>
                                        <p className='world returns'>Many prominent industry leaders have come out and endorsed Bitcoin.</p>
                                    </div>
                                    <div className="start_mining">
                                        <Link to="/" class="btnpurple joinnow ">
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4296 2.69883C16.1609 2.4525 15.8073 2.31979 15.4428 2.32853C15.0784 2.33727 14.7315 2.48678 14.4749 2.7457L12.4171 4.80352C12.2704 4.94915 12.1573 5.1252 12.086 5.31925C12.0146 5.5133 11.9866 5.72064 12.0041 5.92666C12.0215 6.13269 12.0839 6.33238 12.1868 6.51169C12.2898 6.69099 12.4308 6.84554 12.5999 6.96445C18.9937 11.4316 26.9953 23.966 27.0749 24.0926C27.1182 24.1588 27.1773 24.2132 27.2469 24.2509C27.3164 24.2885 27.3943 24.3082 27.4734 24.3082C27.5906 24.3071 27.7031 24.2622 27.789 24.1825C27.8748 24.1027 27.9278 23.9937 27.9374 23.877C28.8063 14.9512 19.3332 5.26664 16.4296 2.69883Z" fill="white"></path><path d="M9.1406 18.519L2.62497 25.0347C0.733273 27.0155 3.57912 29.8603 5.55939 27.969L12.075 21.4534C11.6442 21.0214 9.1406 18.519 9.1406 18.519Z" fill="white"></path><path d="M11.4984 16.1614L9.80151 17.8583C10.2355 18.2922 12.7359 20.7926 12.7359 20.7926L14.4328 19.0958C14.0008 18.665 11.4984 16.1614 11.4984 16.1614Z" fill="white"></path><path d="M16.2141 11.4458L12.1641 15.5005C12.5955 15.9319 15.0984 18.4349 15.0984 18.4349L18.9656 14.563C18.2841 13.7422 16.4297 11.6708 16.2141 11.4458Z" fill="white"></path><path d="M23.8734 9.65502L24.7265 8.8019C24.9967 8.53137 25.1484 8.16468 25.1484 7.78237C25.1484 7.40005 24.9967 7.03337 24.7265 6.76284L23.8359 5.86752C23.5601 5.60569 23.1943 5.45972 22.814 5.45972C22.4337 5.45972 22.068 5.60569 21.7922 5.86752L21.2906 6.36909C21.9894 7.18842 23.6859 9.39721 23.8734 9.65502Z" fill="white"></path></svg>Start Mining
                                        </Link>
                                        <Link to="/" className='watch_video'>
                                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24.3064" cy="24" r="24" fill="#45D399" />
                                                <path d="M17.3064 23.9999V20.4399C17.3064 16.0199 20.4364 14.2099 24.2664 16.4199L27.3564 18.1999L30.4464 19.9799C34.2764 22.1899 34.2764 25.8099 30.4464 28.0199L27.3564 29.7999L24.2664 31.5799C20.4364 33.7899 17.3064 31.9799 17.3064 27.5599V23.9999Z" fill="white" />
                                            </svg>
                                            <span>Watch Video</span>
                                        </Link>
                                    </div>
                                    <div className="discount">
                                        <ul className="inner_discount">
                                            {
                                                items.power.map((data) => {
                                                    return (
                                                        <>
                                                            <li className="payouts" key={data.id}>
                                                                <div className="hadge">
                                                                    <div className="passive">
                                                                        <img src={data.images} alt="img" />
                                                                    </div>
                                                                    <div className="discount_title">
                                                                        <h6> {data.title}</h6>
                                                                        <p>{data.description}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Container>
                </section>
            </>
        )
    }

}

export default Power
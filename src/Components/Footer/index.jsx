import React from "react";
import twt from "../../assets/fi_twitter.png"
import fb from "../../assets/fi_facebook.png"
import twc from "../../assets/fi_twitch.png"
import ig from "../../assets/fi_instagram.png"
import mail from "../../assets/fi_mail.png"
import { Link } from "react-router-dom";


import "./style.css"
const Footer = () => {
    return (
        <div className="footer-body">
            <div className="primary">
                <div className="b1">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="b2">
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className="b3">
                    <div>
                        <div>
                            <h1 className="b3p">Connect with us</h1>
                        </div>
                        <div className="icons">
                            <div className="fb">
                            <Link to="/404">
                            <img src={fb} />
                            </Link>
                            </div><div className="ig">
                            <Link to="/404">
                            <img src={ig} />
                            </Link>
                            </div><div className="twt">
                            <Link to="/404">
                            <img src={twt} />
                            </Link>
                            </div><div className="mail">
                            <Link to="/404">
                            <img src={mail} />
                            </Link>
                            </div><div className="twc">
                            <Link to="/404">
                            <img src={twc} />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b4">
                    <div>
                        <h1 className="b4p">Copyright Binar 2022</h1>
                    </div>
                    <Link to="/">
                    <div className="top-logo"> </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
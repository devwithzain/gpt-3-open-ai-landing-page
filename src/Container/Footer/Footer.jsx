import React from 'react';
import "./Footer.scss";
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <>
            <div className="gpt3__footer section__padding">
                <div className="gpt3__footer-heading">
                    <h1 className="gradient__text">Do you want to step into the future before others.</h1>
                </div>
                <div className="gpt3__footer-btn">
                    <p>Request Early Access</p>
                </div>
                <div className="gpt3__footer-links">
                    <div className="gpt3__footer-links_logo">
                        <img src={gpt3Logo} alt="logo" />
                        <p>Crechterwoord K12 182 DK Alknjkcb, All rights reserved</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Links</h4>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Compony</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contacts</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Get in touch</h4>
                        <p>085-132567</p>
                        <p>info@payme.net</p>
                    </div>
                </div>
                <div className="gpt3__footer-copywright">
                    <p>@ 2023 GPT-3. All rights reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
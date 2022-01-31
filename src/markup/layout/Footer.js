import React from 'react';

import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/full-logo.png';
import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                            <div className="footer-row">
                                <div className="footer-detail">
                                    <Link to="#">
                                        <img src={logo} alt="footer-logo" />
                                    </Link>
                                    <p className="c-grey-1">Fraktal is a community first project, with a mission to to empower artists to be in full control of their work and have unlimited creative freedom.</p>

                                </div>
                                <div className="footer-list footer-social social-gradient">
                                    <h6>Social</h6>
                                    <ul>
                                        <li className="twitter">
                                            <a href="https://twitter.com/FraktalNFT" className="link-underline" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                                <span>Twitter</span>
                                            </a>
                                        </li>
                                        <li className="facebook">
                                            <a href="https://www.instagram.com/fraktal.io/" className="link-underline" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                                <span>Instagram</span>
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="https://discord.com/invite/P6fCPvtZtq" className="link-underline" target="_blank">
                                                <i className="fab fa-discord"></i>
                                                <span>Discord</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="footer-list">
                                    <h6>Resources</h6>
                                    <ul>
                                        <li>
                                            <a href="https://blog.fraktal.io/" className="link-underline" target="_blank">
                                                <span>Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://docs.fraktal.io/" className="link-underline" target="_blank">
                                                <span>Docs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/FraktalNFT" className="link-underline" target="_blank">
                                                <span>Github</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="footer-list">
                                    <h6>Get Started</h6>
                                    <ul>
                                        <li>
                                            <a href="https://waitlist.fraktal.io/" className="link-underline" target="_blank">
                                                <span>Airdrop</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://testnet.fraktal.io/" className="link-underline" target="_blank">
                                                <span>Marketplace</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://docs.fraktal.io/fraktal-dao/overview" className="link-underline" target="_blank">
                                                <span>DAO</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                            <div className="footer-copyright c-grey-1">
                                <h6>&copy; Fraktal Technologies Ltd.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-pattern" style={{backgroundImage: `url(${background_image_1})`}}></div>
            </div>
        </footer>
    );
};

export default Footer;

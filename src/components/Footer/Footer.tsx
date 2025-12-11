import React from "react";
import "./index.css";
import EmailIcon from "../../assets/svg/EmailIcon";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import MapIcon from "../../assets/svg/MapIcon";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo */}
                <div className="footer__logo">
                    <h2 className="footer__logo-text">Logo Here</h2>
                </div>

                {/* Divider */}
                <div className="footer__divider"></div>

                {/* Footer Content */}
                <div className="footer__content">
                    {/* Reach us */}
                    <div className="footer__column">
                        <h3 className="footer__title">Reach us</h3>
                        <div className="footer__contacts">
                            <div className="footer__contact">
                                <span className="footer__icon"><PhoneIcon/></span>
                                <p className="footer__text">+1012 3456 789</p>
                            </div>
                            <div className="footer__contact">
                                <span className="footer__icon"><EmailIcon/></span>
                                <p className="footer__text">demo@gmail.com</p>
                            </div>
                            <div className="footer__contact">
                                <span className="footer__icon"><MapIcon/></span>
                                <p className="footer__text">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links-container">

                    {/* Company */}
                    <div className="footer__column">
                        <h3 className="footer__title">Company</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Blogs</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer__column">
                        <h3 className="footer__title">Legal</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms & Services</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms of Use</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Refund Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__column">
                        <h3 className="footer__title">Quick Links</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Techlabz Keybox</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Downloads</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Forum</a>
                            </li>
                        </ul>
                    </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer__column footer__column--newsletter">
                        <h3 className="footer__title">Join Our Newsletter</h3>
                        <div className="footer__newsletter">
                            <div className="footer__column--newsletter-form">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="footer__input"
                                    />
                                <button className="footer__button">
                                    Subscribe
                                </button>
                            </div>
                            <p className="footer__note">
                                {/* <span>
                                    *
                                    </span>
                                    <span>
                                    
                                    Will send you weekly updates for your better tour management.
                                    </span> */}
                                    *&nbsp; Will send you weekly updates for your better tool management.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Footer Content */}
                <div className="footer__content-mobile footer__content">
                    {/* Reach us */}
                    <div className="footer__column">
                        <h3 className="footer__title">Reach us</h3>
                        <div className="footer__contacts">
                            <div className="footer__contact">
                                <span className="footer__icon"><PhoneIcon/></span>
                                <p className="footer__text">+1012 3456 789</p>
                            </div>
                            <div className="footer__contact">
                                <span className="footer__icon"><EmailIcon/></span>
                                <p className="footer__text">demo@gmail.com</p>
                            </div>
                            <div className="footer__contact">
                                <span className="footer__icon"><MapIcon/></span>
                                <p className="footer__text">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="footer__column right">
                        <div>
                            <h3 className="footer__title">Company</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">About</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Contact</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="footer__column">
                        <h3 className="footer__title">Legal</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms & Services</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms of Use</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Refund Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__column right">
                        <div>
                            <h3 className="footer__title">Quick Links</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Techlabz Keybox</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Downloads</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Forum</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                </div>
                    <div className="footer__column footer__column--newsletter mobile">
                        <h3 className="footer__title">Join Our Newsletter</h3>
                        <div className="footer__newsletter">
                            <div className="footer__column--newsletter-form">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="footer__input"
                                    />
                                <button className="footer__button">
                                    Subscribe
                                </button>
                            </div>
                            <p className="footer__note">
                                    *&nbsp; Will send you weekly updates for your better tool management.
                            </p>
                        </div>
                    </div>
            </div>
        </footer>
    );

}

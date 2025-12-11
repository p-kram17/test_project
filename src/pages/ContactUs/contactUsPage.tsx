import React from "react";
import "./index.css";
import BackgroundHero from "../../assets/svg/BackgroundHero";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import EmailIcon from "../../assets/svg/EmailIcon";
import MapIcon from "../../assets/svg/MapIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import InstagramIcon from "../../assets/svg/InstagramIcon";
import DiscordIcon from "../../assets/svg/DiscordIcon";
import PlaneSvg from "../../assets/svg/PlaneSvg";
import PlaneMobileSvg from "../../assets/svg/PlaneMobileSvg";

export default function ContactPage() {
    return (
        <div className="page">

            <section className="contact">
                <div className="section">
                    <h1>Contact Us</h1>
                    <p className="subtitle">Any question or remarks? Just write us a message!</p>
                </div>

                <div className="contact__grid">
                    <BackgroundHero>
                        <div>
                            <h2>Contact Information</h2>
                            <p>Say something to start a live chat!</p>
                        </div>

                        <div>
                            <p className="info-item"><PhoneIcon/>+1012 3456 789</p>
                            <p className="info-item"><EmailIcon/>demo@gmail.com</p>
                            <p className="info-item">
                                <MapIcon/>132 Dartmouth Street Boston, <br/>
                                Massachusetts 02156 United States
                            </p>
                        </div>
                        <span>
                            <div className='icon'>
                                <TwitterIcon/>
                            </div>
                            <div className='icon'>
                                <InstagramIcon/>
                            </div>
                            <div className='icon'>
                                <DiscordIcon/>
                            </div>
                        </span>
                    </BackgroundHero>

                    <form className="contact-form">
                        <div className="row">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe"/>
                            </div>
                        </div>

                        <div className="row" 
                        // style={{margin: '47px 0 0 52px'}}
                        >
                            <div className="field">
                                <label>Email</label>
                                <input type="email" placeholder=""/>
                            </div>
                            <div className="field">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+1 012 3456 789"/>
                            </div>
                        </div>

                        <div className="field__block">
                            <label>Select Subject?</label>

                            <div className="radio-group">
                                <label className="radio-item">
                                    <input type="radio" name="subject"/>
                                    <span className="circle"></span>
                                    General Inquiry
                                </label>

                                <label className="radio-item">
                                    <input type="radio" name="subject"/>
                                    <span className="circle"></span>
                                    General Inquiry
                                </label>

                                <label className="radio-item">
                                    <input type="radio" name="subject"/>
                                    <span className="circle"></span>
                                    General Inquiry
                                </label>

                                <label className="radio-item">
                                    <input type="radio" name="subject"/>
                                    <span className="circle"></span>
                                    General Inquiry
                                </label>
                            </div>
                        </div>

                        <div className="field__message">
                            <label>Message</label>
                            <textarea placeholder="Write your message.."></textarea>
                        </div>
                        <div className='button__wrapper'>
                            <button onClick={(e: any) => e.preventDefault()} className="send-button">Send Message
                            </button>
                        </div>
                        <span className='plane'>
                            <PlaneSvg/>
                        </span>
                        <span className="plane mobile">
                            <PlaneMobileSvg/>
                        </span>
                    </form>
                </div>
            </section>
        </div>
    );
}

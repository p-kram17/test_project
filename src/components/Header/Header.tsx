import React, { useState } from "react";
import './index.css'
import ArrowIcon from "../../assets/svg/ArrowIcon";
import CartIcon from "../../assets/svg/CartIcon";
import UserIcon from "../../assets/svg/UserIcon";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import CrossIcon from "../../assets/svg/CrossIcon";


export default function Header() {
    const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

    function toggleMobileHeader() {
        setIsMobileHeaderOpen(prev => !prev);
    }

    return (
        <>
        <header className="header">
            <div className={`header__logo ${isMobileHeaderOpen ? "header__logo-white" : ""}`}>Logo Here</div>
            <div className="header__info">
                <nav className="header__nav">
                    <a href="#">Home</a>
                    <a href="#">Features <ArrowIcon/></a>
                    <a href="#">Blog</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="header__icons">
                    <button><UserIcon/></button>
                    <button><CartIcon/></button>
                </div>
            </div>
            <div className="header__burger">
                <button onClick={toggleMobileHeader}>
                    {isMobileHeaderOpen ? 
                    <CrossIcon/> :
                    <BurgerIcon/>
                }
                </button>
            </div>
        </header>
        {isMobileHeaderOpen &&
            <div className="header__mobile">
                <nav className="header__mobile-nav">
                    <a href="#">Home</a>
                    <a href="#">Features <ArrowIcon strokeColor="white"/></a>
                    <a href="#">Blog</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="header__icons">
                    <button><UserIcon strokeColor="white"/></button>
                    <button><CartIcon strokeColor="white"/></button>
                </div>
            </div>
        }
        </>
    );
}
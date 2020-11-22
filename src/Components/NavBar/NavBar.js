import React from "react";
import "./NavBar.css";
import Context from "../../Context";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="NavBar-content">
                <header className="top-header">
                    <div className="header-left">
                        <img className="logo" src={Logo} alt="Pixel Grind Games Logo" />
                        <Link to="/" className="hidden">
                            Home
                        </Link>
                        <Link to="/about-me" className="hidden">
                            About Me
                        </Link>
                        <Link to="/portfolio" className="hidden">
                            Portfolio
                        </Link>
                    </div>
                    <div className="header-center">
                        <h1>Marc Tucker</h1>
                    </div>
                    <div className="header-right">
                        <button type="button" className="switch-mode-button">
                            Professional
                        </button>
                        <p className="js-current-mode">*switch</p>
                    </div>
                </header>
                <div className="bottom-header"></div>
            </div>
        );
    }
}

export default NavBar;

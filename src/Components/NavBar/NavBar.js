import React from "react";
import "./NavBar.css";
import Context from "../../Context";
import Logo from "../../images/logo.jpg";

class NavBar extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="NavBar-content">
                <header className="top-header">
                    <div className="header-left">
                        <img className="logo" src={Logo} alt="Pixel Grind Games Logo" />
                    </div>
                    <div className="header-center">
                        <h1>Marc Tucker</h1>
                    </div>
                    <div className="header-right">
                        <ul id="switch-mode">
                            <li>
                                <button type="button" className="switch-mode-button">
                                    Switch Mode
                                </button>
                            </li>
                            <li className="js-current-mode">current: professional</li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar;

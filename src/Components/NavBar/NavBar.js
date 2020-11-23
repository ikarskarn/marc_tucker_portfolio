import React from "react";
import "./NavBar.css";
import Context from "../../Context";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
    static contextType = Context;
    state = {
        expanded: false,
        headerText: "bottom-header",
    };

    expand = () => {
        let b = this.state.expanded;
        b = !b;
        let s = b ? "bottom-header-expanded" : "bottom-header";
        this.setState({
            expanded: b,
            headerText: s,
        });
    };

    render() {
        return (
            <div className="NavBar-content">
                <header className="top-header bg-lightGreen">
                    <div className="header-left">
                        <Link to="/">
                            <img className="logo" src={Logo} alt="Pixel Grind Games Logo" />
                        </Link>
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
                        <button type="button" className="switch-mode-button bg-darkGreen">
                            Professional
                        </button>
                        <p className="js-current-mode">*switch</p>
                    </div>
                </header>
                <div className={this.state.headerText}>
                    <button id="see-more" onClick={() => this.expand()}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link className="line nav" onClick={() => this.expand()} to="/">
                        Home
                    </Link>
                    <Link className="line nav" onClick={() => this.expand()} to="/about-me">
                        About Me
                    </Link>
                    <Link className="nav" onClick={() => this.expand()} to="/portfolio">
                        Portfolio
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;

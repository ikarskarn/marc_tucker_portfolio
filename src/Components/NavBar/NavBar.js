import React from "react";
import "./NavBar.css";
import Context from "../../Context";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
                <header
                    className={`top-header ${
                        this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                    }`}
                >
                    <div className="header-left">
                        <Link to="/">
                            <img className="logo" src={Logo} alt="Pixel Grind Games Logo" />
                        </Link>
                    </div>
                    <div className="header-center">
                        <h1 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                            Marc Tucker
                        </h1>
                    </div>
                    <div className="header-right">
                        <button
                            type="button"
                            onClick={() => this.context.updateMode()}
                            className={`switch-mode-button ${
                                this.context.proMode ? "bg-darkGreen" : "bg-darkBlue"
                            }`}
                        >
                            {this.context.proMode ? "Professional" : "Casual"}
                        </button>
                        <p
                            className={`js-current-mode ${
                                this.context.proMode ? "proText" : "casText"
                            }`}
                        >
                            *switch
                        </p>
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

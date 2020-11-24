import React from "react";
import "./PageLinks.css";
import Context from "../../Context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3,
    faGit,
    faGithub,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faNpm,
    faReact,
    faUnity,
} from "@fortawesome/free-brands-svg-icons";

class PageLinks extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="pageLinks-content">
                <section className="page-links">
                    <Link
                        to="/portfolio"
                        className={`portfolio-link ${
                            this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                        }`}
                    >
                        <p className={`link-text ${this.context.proMode ? "proText" : "casText"}`}>
                            Portfolio
                        </p>
                    </Link>
                    <Link
                        to="/about-me"
                        className={`aboutMe-link ${
                            this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                        }`}
                    >
                        <p className={`link-text ${this.context.proMode ? "proText" : "casText"}`}>
                            About Me
                        </p>
                    </Link>
                </section>
                <section className="programs">
                    <FontAwesomeIcon className="p-icon" icon={faReact} />
                    <FontAwesomeIcon className="p-icon" icon={faUnity} />
                    <FontAwesomeIcon className="p-icon" icon={faJsSquare} />
                    <FontAwesomeIcon className="p-icon" icon={faHtml5} />
                    <FontAwesomeIcon className="p-icon" icon={faCss3} />
                    <FontAwesomeIcon className="p-icon" icon={faNodeJs} />
                    <FontAwesomeIcon className="p-icon" icon={faNpm} />
                    <FontAwesomeIcon className="p-icon" icon={faGithub} />
                    <FontAwesomeIcon className="p-icon" icon={faGit} />
                </section>
            </div>
        );
    }
}

export default PageLinks;

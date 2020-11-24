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
    faMarkdown,
    faNodeJs,
    faNpm,
    faReact,
    faUnity,
} from "@fortawesome/free-brands-svg-icons";
import UnrealIcon from "../../images/unreal-engine-logo.png";
import MayaIcon from "../../images/Maya.png";
class PageLinks extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="pageLinks-content">
                <section class="page-links">
                    <Link to="/portfolio" class="portfolio-link bg-lightGreen">
                        <p className="link-text">Portfolio</p>
                    </Link>
                    <Link to="/about-me" class="aboutMe-link bg-lightGreen">
                        <p className="link-text">About Me</p>
                    </Link>
                </section>
                <section className="programs">
                    <FontAwesomeIcon className="p-icon" icon={faCss3} />
                    <FontAwesomeIcon className="p-icon" icon={faGithub} />
                    <FontAwesomeIcon className="p-icon" icon={faGit} />
                    <FontAwesomeIcon className="p-icon" icon={faHtml5} />
                    <FontAwesomeIcon className="p-icon" icon={faJsSquare} />
                    <FontAwesomeIcon className="p-icon" icon={faNodeJs} />
                    <FontAwesomeIcon className="p-icon" icon={faNpm} />
                    <FontAwesomeIcon className="p-icon" icon={faReact} />
                    <FontAwesomeIcon className="p-icon" icon={faUnity} />
                </section>
            </div>
        );
    }
}

export default PageLinks;

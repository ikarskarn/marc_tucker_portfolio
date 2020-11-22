import React from "react";
import "./PageLinks.css";
import Context from "../../Context";
import { Link } from "react-router-dom";

class PageLinks extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="PageLinks-content">
                <section class="page-links">
                    <Link to="/portfolio" class="portfolio-link">
                        <p className="link-text">Portfolio</p>
                    </Link>
                    <Link to="/about-me" class="aboutMe-link">
                        <p className="link-text">About Me</p>
                    </Link>
                </section>
            </div>
        );
    }
}

export default PageLinks;

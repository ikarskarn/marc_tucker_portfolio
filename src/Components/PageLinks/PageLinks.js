import React from "react";
import "./PageLinks.css";
import Context from "../../Context";

class PageLinks extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="PageLinks-content">
                <section class="page-links">
                    <button type="button" id="js-portfolio-button" class="portfolio-link">
                        Portfolio
                    </button>
                    <button type="button" id="js-aboutMe-button" class="aboutMe-link">
                        About Me
                    </button>
                </section>
            </div>
        );
    }
}

export default PageLinks;

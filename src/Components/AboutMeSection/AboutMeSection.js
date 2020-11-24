import React from "react";
import "./AboutMeSection.css";
import Context from "../../Context";
import STORE from "../../STORE";

class AboutMe extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="AboutMe-content">
                <a id="aboutMe-anchor"></a>
                <section class="bio">
                    <header class="section-header">
                        <h2
                            id="about-me-header"
                            className={`${
                                this.context.proMode
                                    ? "bg-lightGreen proHeader"
                                    : "bg-lightBlue casHeader"
                            }`}
                        >
                            About Me
                        </h2>
                    </header>
                    <div class={`bio-overview ${this.context.proMode ? "proText" : "casText"}`}>
                        {this.context.proMode ? STORE.bio.pro : STORE.bio.cas}
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;

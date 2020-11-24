import React from "react";
import "./AboutMeSection.css";
import Context from "../../Context";
import CasBio from "./CasBio";
import ProBio from "./ProBio";

class AboutMe extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="AboutMe-content">
                <a id="aboutMe-anchor"></a>
                <section className="bio">
                    <header className="section-header">
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
                    <div className={`bio-overview ${this.context.proMode ? "proText" : "casText"}`}>
                        {this.context.proMode ? <ProBio /> : <CasBio />}
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;

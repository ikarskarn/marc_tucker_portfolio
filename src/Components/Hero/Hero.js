import React from "react";
import "./Hero.css";
import Context from "../../Context";
import proPhoto from "../../images/profProfilePic.png";
import casPhoto from "../../images/marc_casual.png";
import ProSkills from "./ProSkills";
import CasSkills from "./CasSkills";

class Hero extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="hero-content bg-white">
                <section className="hero">
                    <div className="name">
                        <h2
                            className={`name-header ${
                                this.context.proMode ? "proHeader" : "casHeader"
                            }`}
                        >
                            Marc Tucker
                        </h2>
                    </div>
                    <img
                        id="js-profile-photo"
                        className="profile-photo"
                        src={this.context.proMode ? proPhoto : casPhoto}
                        alt="Marc Tucker"
                    />
                    <div className={`skill-list ${this.context.proMode ? "proText" : "casText"}`}>
                        {this.context.proMode ? <ProSkills /> : <CasSkills />}
                    </div>
                </section>
            </div>
        );
    }
}

export default Hero;

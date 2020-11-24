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
                <section class="hero">
                    <div class="name">
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
                        class="profile-photo"
                        src={this.context.proMode ? proPhoto : casPhoto}
                        alt="Professional Profile Photo of Marc Tucker"
                    />
                    <div class={`skill-list ${this.context.proMode ? "proText" : "casText"}`}>
                        {this.context.proMode ? <ProSkills /> : <CasSkills />}
                    </div>
                </section>
            </div>
        );
    }
}

export default Hero;

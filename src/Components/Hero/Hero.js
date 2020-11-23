import React from "react";
import "./Hero.css";
import Context from "../../Context";
import ProfilePhoto from "../../images/profProfilePic.png";

class Hero extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="hero-content bg-white">
                <section class="hero">
                    <div class="name">
                        <h2 class="name-header">Marc Tucker</h2>
                    </div>
                    <img
                        id="js-profile-photo"
                        class="profile-photo"
                        src={ProfilePhoto}
                        alt="Professional Profile Photo of Marc Tucker"
                    />
                    <div class="skill-list">
                        <ul>
                            <li>Full Stack</li>
                            <li>Game Development</li>
                            <li>Mobile Development</li>
                            <li>Game Design Instruction</li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Hero;

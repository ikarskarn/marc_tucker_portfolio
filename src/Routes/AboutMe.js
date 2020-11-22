import React from "react";
import Context from "../Context";
import AboutMeSection from "../Components/AboutMeSection/AboutMeSection";

class AboutMe extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="AboutMe-content">
                <AboutMeSection />
            </div>
        );
    }
}

export default AboutMe;

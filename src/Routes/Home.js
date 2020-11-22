import React from "react";
import Context from "../Context";
import Hero from "../Components/Hero/Hero";
import PageLinks from "../Components/PageLinks/PageLinks";

class Home extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="Home-content">
                <PageLinks />
            </div>
        );
    }
}

export default Home;

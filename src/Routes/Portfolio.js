import React from "react";
import Context from "../Context";
import PortfolioSection from "../Components/PortfolioSection/PortfolioSection";

class Portfolio extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="Portfolio-content">
                <PortfolioSection />
            </div>
        );
    }
}

export default Portfolio;

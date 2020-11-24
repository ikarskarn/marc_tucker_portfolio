import React from "react";
import "./PortfolioSection.css";
import Context from "../../Context";
//import images
import CovidApp_PageTop from "../../images/CovidApp_PageTop.PNG";
import CovidApp_GraphState from "../../images/covid_graph_state.gif";
import Catalog_Admin from "../../images/catalog_mobile_01.jpg";
import Catalog_App from "../../images/catalog_mobile_02.jpg";
import SmizeApp from "./SmizeApp";
import QuizApp from "./QuizApp";
import CovidApp from "./CovidApp";
import CatalogApp from "./CatalogApp";

class PortfolioSection extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="PortfolioSection-content">
                <SmizeApp />
                <CovidApp />
                <QuizApp />
                <CatalogApp />
            </div>
        );
    }
}

export default PortfolioSection;

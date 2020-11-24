import React from "react";
import "./PortfolioSection.css";
import Context from "../../Context";
//import images
import SmizeApp from "./SmizeApp";
import QuizApp from "./QuizApp";
import CovidApp from "./CovidApp";
import CatalogApp from "./CatalogApp";

export default function PortfolioSection(props) {
    return (
        <div className="PortfolioSection-content">
            <SmizeApp />
            <CovidApp />
            <QuizApp />
            <CatalogApp />
        </div>
    );
}

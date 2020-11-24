import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PortfolioSection from "./PortfolioSection";

describe("<PortfolioSection />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <BrowserRouter>
                <PortfolioSection />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});

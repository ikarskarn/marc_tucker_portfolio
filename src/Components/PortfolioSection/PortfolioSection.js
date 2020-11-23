import React from "react";
import "./PortfolioSection.css";
import Context from "../../Context";
import QuizApp_Incorrect from "../../images/quizApp_incorrect.png";
import QuizApp_Results from "../../images/quizApp_results.png";
import CovidApp_PageTop from "../../images/CovidApp_PageTop.PNG";
import CovidApp_GraphState from "../../images/covid_graph_state.gif";

class PortfolioSection extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="PortfolioSection-content">
                <section className="port-app">
                    <header className="section-header">
                        <h2 id="applications-header" className=" bg-lightGreen">
                            3D Quiz App
                        </h2>
                    </header>
                    <div className="port-container">
                        <div className="port-images">
                            <img
                                src={QuizApp_Incorrect}
                                alt="3D Components Quiz Application incorrect answer"
                            />
                            <img
                                src={QuizApp_Results}
                                alt="3D Components Quiz Application results screen"
                            />
                        </div>
                        <div className="port-overview">
                            <h3 className="overview-header bg-lightGreen">
                                3D Components Quiz Application
                            </h3>
                            <p>
                                The 3D Components Quiz Application is an example of a minimalistic
                                interactive quiz application built from the ground up. It is built
                                with semantic and a11y accessible HTML, styled with CSS, and
                                interaction is coded in JavaScript and jQuery Libraries.
                            </p>
                            <h3>Project Tech</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Photoshop</li>
                                <li>VS Code</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <div className="port-buttons bg-lightGreen">
                        <button type="button" className="try-it bg-darkGreen">
                            Try It Out
                        </button>
                        <button type="button" className="check-it-out bg-darkGreen">
                            Check Out the Code
                        </button>
                    </div>
                </section>
                <section className="port-app-alt">
                    <header class="section-header">
                        <h2 id="applications-header-alt" className="bg-darkGreen">
                            COVID-19 API App
                        </h2>
                    </header>
                    <div className="port-container">
                        <div className="port-images">
                            <img
                                src={CovidApp_PageTop}
                                alt="Covid-19 app screenshot for Top of Page"
                            />
                            <img
                                src={CovidApp_GraphState}
                                alt="Animated image of state data on a bar graph"
                            />
                        </div>
                        <div className="port-overview-alt">
                            <h3 className="overview-header bg-darkGreen">
                                Covid-19 API Application
                            </h3>
                            <p>
                                Covid-19 has been exceedingly disruptive to many people's lives over
                                the past year. This application is intended to provide insight into
                                the upcoming increase or decrease in positive Covid cases. Utilizing
                                previous numbers, this application predicts the potential future
                                numbers and displays the 7 and 14 day outlook. It also offers a
                                readout of the past 14 days of Covid cases that can be sorted by
                                Total US cases or by State. The Covid-19 API Application gathers
                                data from the Covid-19 Tracking Project and was developed using with
                                semantic and a11y accessible HTML, styled with CSS, and interaction
                                coded in JavaScript and jQuery Libraries.
                            </p>
                            <h3>Project Tech</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Photoshop</li>
                                <li>VS Code</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <div class="port-buttons">
                        <button type="button" id="js-try-button" class="try-it bg-lightGreen">
                            Try It Out
                        </button>
                        <button
                            type="button"
                            id="js-check-button"
                            class="check-it-out bg-lightGreen"
                        >
                            Check Out the Code
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default PortfolioSection;

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
                <section class="port-app-3d">
                    <header class="section-header">
                        <h2 id="applications-header-3d">3D Quiz App</h2>
                    </header>
                    <div class="port-container">
                        <div class="port-images">
                            <img
                                src={QuizApp_Incorrect}
                                alt="3D Components Quiz Application screenshot for incorrect answer"
                            />
                            <img
                                src={QuizApp_Results}
                                alt="3D Components Quiz Application screenshot for results screen"
                            />
                        </div>
                        <div class="port-overview">
                            <h3>3D Components Quiz Application</h3>
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
                    <div class="port-buttons">
                        <button type="button" id="js-try-button" class="try-it-3d">
                            Try It Out
                        </button>
                        <button type="button" id="js-check-button" class="check-it-out-3d">
                            Check Out the Code
                        </button>
                    </div>
                </section>
                <section class="port-app-covid">
                    <header class="section-header">
                        <h2 id="applications-header-covid">COVID-19 API App</h2>
                    </header>
                    <div class="port-container">
                        <div class="port-images">
                            <img
                                src={CovidApp_PageTop}
                                alt="Covid-19 app screenshot for Top of Page"
                            />
                            <img
                                src={CovidApp_GraphState}
                                alt="Animated image of state data on a bar graph"
                            />
                        </div>
                        <div class="port-overview">
                            <h3>3D Components Quiz Application</h3>
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
                    <div class="port-buttons">
                        <button type="button" id="js-try-button" class="try-it-covid">
                            Try It Out
                        </button>
                        <button type="button" id="js-check-button" class="check-it-out-covid">
                            Check Out the Code
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default PortfolioSection;

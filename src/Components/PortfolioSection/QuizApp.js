import React from "react";
import Context from "../../Context";
//import images
import QuizApp_Incorrect from "../../images/quizApp_incorrect.png";
import QuizApp_Results from "../../images/quizApp_results.png";

class QuizApp extends React.Component {
    static contextType = Context;
    render() {
        const proOverview = (
            <p className={"proText"}>
                The 3D Components Quiz Application is an example of a minimalistic, interactive quiz
                application built from the ground up. It is built with semantic and a11y accessible
                HTML, styled with CSS, and interaction is coded in JavaScript and jQuery Libraries.
            </p>
        );
        const casOverview = (
            <p className={"casText"}>
                One of the trickier parts about learning 3D modeling is all the terminology that
                gets thrown around. The 3D Components Quiz App uses a minimalistic design. This
                interactive quiz was created using just HTML, CSS, JavaScript and jQuery Libraries.
            </p>
        );
        return (
            <section className="port-app">
                <header className="section-header">
                    <h2
                        id="applications-header"
                        className={`${
                            this.context.proMode
                                ? "bg-lightGreen proHeader"
                                : "bg-lightBlue casHeader"
                        }`}
                    >
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
                        <h3
                            className={`overview-header ${
                                this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                            }`}
                        >
                            Overview
                        </h3>
                        {this.context.proMode ? proOverview : casOverview}
                        <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                            Project Tech
                        </h3>
                        <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
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
                <div
                    className={`port-buttons ${
                        this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                    }`}
                >
                    <a
                        href="https://ikarskarn.github.io/quizApp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`try-it ${
                            this.context.proMode ? "bg-darkGreen" : "bg-darkBlue"
                        }`}
                    >
                        <p className={`a-text ${this.context.proMode ? "proText" : "casText"}`}>
                            Try It Out
                        </p>
                    </a>
                    <a
                        href="https://github.com/ikarskarn/quizApp.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`check-it-out ${
                            this.context.proMode ? "bg-darkGreen" : "bg-darkBlue"
                        }`}
                    >
                        <p className={`a-text ${this.context.proMode ? "proText" : "casText"}`}>
                            Check Out the Code
                        </p>
                    </a>
                </div>
            </section>
        );
    }
}

export default QuizApp;

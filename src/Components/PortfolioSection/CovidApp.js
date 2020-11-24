import React from "react";
import Context from "../../Context";
//import images
import CovidApp_PageTop from "../../images/CovidApp_PageTop.PNG";
import CovidApp_GraphState from "../../images/covid_graph_state.gif";

class CovidApp extends React.Component {
    static contextType = Context;
    render() {
        const proOverview = (
            <p className={"proText"}>
                Covid-19 has been exceedingly disruptive to many people's lives over the past year.
                This application is intended to provide insight into the upcoming increase or
                decrease in positive Covid cases. Utilizing previous numbers, this application
                predicts the potential future numbers and displays the 7 and 14 day outlook. It also
                offers a readout of the past 14 days of Covid cases that can be sorted by Total US
                cases or by State. The Covid-19 API Application gathers data from the Covid-19
                Tracking Project and was developed using with semantic and a11y accessible HTML,
                styled with CSS, and interaction coded with JavaScript and jQuery Libraries.
            </p>
        );
        const casOverview = (
            <p className={"casText"}>
                This App is meant to show off my skills with connecting to an external API to
                present data in a useful way. I built the app from scratch. In a lot of states,
                people and companies alike are trying to get back to normal because some of the
                restrictions have begun to be lifted. But there are a lot of people still worried
                about getting out there. This app is intended to estimate how many new cases to
                expect in the coming weeks for a user's state. As a board member of a local
                Community Theatre, a community college instructor, and as a father, I wanted to
                build this app to help people out and give them some peace of mind. I pulled
                statistical data from the Covid-19 Tracking Project API and tried to provide as much
                info as possible to encourage people to make smart choices in the coming weeks. I
                built it with semantic and a11y accessible HTML, styled it with CSS, and all the
                interaction is coded in JavaScript and jQuery Libraries. The API data was pulled
                from the Covid-19 Tracking Project.
            </p>
        );
        return (
            <section className="port-app-alt">
                <header className="section-header">
                    <h2
                        id="applications-header-alt"
                        className={`${
                            this.context.proMode
                                ? "bg-darkGreen proHeader"
                                : "bg-darkBlue casHeader"
                        }`}
                    >
                        Covid-19 API Application
                    </h2>
                </header>
                <div className="port-container">
                    <div className="port-images">
                        <img src={CovidApp_PageTop} alt="Covid-19 app screenshot for Top of Page" />
                        <img
                            src={CovidApp_GraphState}
                            alt="Animated image of state data on a bar graph"
                        />
                    </div>
                    <div className="port-overview-alt">
                        <h3
                            className={`overview-header ${
                                this.context.proMode
                                    ? "bg-darkGreen proHeader"
                                    : "bg-darkBlue casHeader"
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
                <div class="port-buttons">
                    <a
                        href="https://ikarskarn.github.io/covid19_app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`try-it ${
                            this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                        }`}
                    >
                        <p className={`a-text ${this.context.proMode ? "proText" : "casText"}`}>
                            Try It Out
                        </p>
                    </a>
                    <a
                        href="https://github.com/ikarskarn/covid19_app.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`check-it-out ${
                            this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
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

export default CovidApp;

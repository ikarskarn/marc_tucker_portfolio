import React from "react";
import Context from "../../Context";
//import images
import Smize_MainPage from "../../images/smize_mobile_01.jpg";
import Smize_App from "../../images/smize_mobile_02.jpg";

class SmizeApp extends React.Component {
    static contextType = Context;

    render() {
        const proOverview = (
            <p className={"proText"}>
                The phrase, Smize, was a slang term originally spoken by Tara Banks. The meaning of
                the term is to "Smile with your eyes". As a model, smiling with your eyes is the
                best way to achieve a natural looking smile for the camera. The Smize Application is
                designed for photographers as a way to encourage their clients to project that
                natural smile. Smize displays humorous phrases for photographers to read aloud while
                taking photographs of clients. The Application was built utilizing HTML, CSS,
                JavaScript, React, Nodejs, Express, and PostgreSQL.
            </p>
        );
        const casOverview = (
            <p className={"casText"}>
                Smize for the camera! That odd sounding word was coined by Tara Banks and simply
                means, "smiling with your eyes". It's the best way to show a natural smile to the
                camera. The Smize App is designed for photographers to get those stubborn clients to
                do just that. Smize displays humorous (sometimes), sayings, Dad jokes, and other
                phrases for the photographer to read while taking photos of clients. Smize is a Full
                Stack app using HTML, CSS, JavaScript, React, Nodejs, Express, and PostgreSQL.
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
                        Smize
                    </h2>
                </header>
                <div className="port-container">
                    <div className="port-images">
                        <img src={Smize_MainPage} alt="Smize Application landing page" />
                        <img src={Smize_App} alt="Smize Application primary functionality" />
                    </div>
                    <div className="port-overview">
                        <h3
                            className={`overview-header ${
                                this.context.proMode
                                    ? "bg-lightGreen proHeader"
                                    : "bg-lightBlue casHeader"
                            }`}
                        >
                            Overview
                        </h3>
                        {this.context.proMode ? proOverview : casOverview}
                        <h3 className={`${this.context.proMode ? "proHeader" : "casHeader"}`}>
                            Project Tech
                        </h3>
                        <ul className={`${this.context.proMode ? "proText" : "casText"}`}>
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>javaScript</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`port-buttons ${
                        this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                    }`}
                >
                    <a
                        href="https://smize-app.vercel.app/"
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
                        href="https://github.com/ikarskarn/smize-app.git"
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

export default SmizeApp;

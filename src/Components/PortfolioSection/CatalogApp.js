import React from "react";
import Context from "../../Context";
//import images
import Catalog_Admin from "../../images/catalog_mobile_01.jpg";
import Catalog_App from "../../images/catalog_mobile_02.jpg";

class CatalogApp extends React.Component {
    static contextType = Context;
    render() {
        const proOverview = (
            <p className={"proText"}>
                As an instructional designer, web developer, and game developer for the Center for
                Teaching and Learning Excellence, an ever-changing course catalog is essential to
                providing information to faculty and staff about learning and training
                opportunities. The CTLE Catalog is a Full Stack application developed using HTML,
                CSS, JavaScript, React, Nodejs, React, and PostgreSQL.
            </p>
        );
        const casOverview = (
            <p className={"casText"}>
                The Community College I work for has over 1200 faculty and staff and thousands of
                courses across multiple disciplines. It's easy for available training opportunities
                to get lost in the shuffle. I designed the Center for Teaching a Learning Catalog
                app to help faculty and staff find the training they are looking for. It is a Full
                Stack App designed and developed using HTML, CSS, JavaScript, React, Nodejs, React,
                and PostgreSQL.
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
                        Center for Teaching and Learning Catalog
                    </h2>
                </header>
                <div className="port-container">
                    <div className="port-images">
                        <img src={Catalog_Admin} alt="Catalog admin page" />
                        <img src={Catalog_App} alt="Catalog course page" />
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
                        href="https://catalog-app.vercel.app/"
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
                        href="https://github.com/ikarskarn/catalog-app.git"
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

export default CatalogApp;

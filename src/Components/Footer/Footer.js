import React from "react";
import "./Footer.css";
import Context from "../../Context";

class Footer extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div
                className={`footer-content ${
                    this.context.proMode ? "bg-lightGreen" : "bg-lightBlue"
                }`}
            >
                <footer>
                    <p className={`contact-label ${this.context.proMode ? "proText" : "casText"}`}>
                        Contact Info
                    </p>
                    <address>
                        <div className="contact">
                            Email: <a href="mailto:marcttucker@gmail.com">marcttucker@gmail.com</a>{" "}
                        </div>
                        <div className="contact">
                            GitHub: <a href="https://github.com/ikarskarn">@ikarskarn</a>{" "}
                        </div>
                        <div className="contact">
                            LinkedIn:{" "}
                            <a href="https://www.linkedin.com/in/marc-tucker-3190884">
                                @marcttucker
                            </a>{" "}
                        </div>
                    </address>
                </footer>
            </div>
        );
    }
}

export default Footer;

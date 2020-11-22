import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Context from "./Context";
//import routes
import Home from "./Routes/Home";
import AboutMe from "./Routes/AboutMe";
import Portfolio from "./Routes/Portfolio";
//import components
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";

class App extends React.Component {
    state = {
        error: null,
    };

    render() {
        return (
            <main className="App">
                <Context.Provider value={this.state}>
                    <NavBar />
                    <Hero />
                    <div className="content" aria-live="polite">
                        <div className="content" aria-live="polite">
                            <Route exact path="/" component={Home} />
                            <Route path="/about-me" component={AboutMe} />
                            <Route path="/portfolio" component={Portfolio} />
                        </div>
                    </div>
                </Context.Provider>
            </main>
        );
    }
}

export default App;

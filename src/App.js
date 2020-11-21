import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Context from "./Context";

class App extends React.Component {
    state = {
        error: null,
    };

    render() {
        return (
            <main className="App">
                <Context.Provider value={this.state}>
                    <div className="content" aria-live="polite">
                        Hello There You
                    </div>
                </Context.Provider>
            </main>
        );
    }
}

export default App;

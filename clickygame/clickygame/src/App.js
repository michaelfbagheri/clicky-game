import React, { Component } from "react";
import shapes from "./shapes";
import DataDivs from "./components/DataDivs";

class App extends Component {
    state = {
        shapes
    };


    render() {
        return (
            <DataDivs />
        )

    }
}

export default App;

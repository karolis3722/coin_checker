import * as React from "react";
import * as ReactDOM from "react-dom";
import MainComponent from './components/MainComponent'
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
    <div>
        <h1>Coin Checker</h1>
        <MainComponent />

    </div>,
    document.getElementById("root")
);
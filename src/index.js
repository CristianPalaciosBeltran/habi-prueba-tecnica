import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import "styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Inter:300,400,500,700', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById("app"));

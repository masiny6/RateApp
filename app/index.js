import React from "react"
import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App.js"
import "./scss/index.scss"


const app = <BrowserRouter>
<App/>
</BrowserRouter>

ReactDom.render(
    app,
    document.getElementById('inner-body')
);
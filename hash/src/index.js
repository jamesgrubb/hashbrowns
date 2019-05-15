import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router  } from 'react-router-dom'
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,500i|Expletus+Sans:400,700");
*,*:after,*:before{
    box-sizing: border-box;
}
html{
    box-sizing: inherit
}
h1,h2{
    font-family: "Expletus Sans", sans-serif
}
`

ReactDOM.render(<Router>
    <GlobalStyles /><Routes />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

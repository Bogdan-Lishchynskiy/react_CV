import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();

injectGlobal`
  body {
    width:60%;
    background-color: ghostwhite;
    margin-left: auto;
    margin-right: auto;
    font-family: cursive;
    text-align:center;
    border: 2px solid black;
  }
`
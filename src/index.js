import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import Foo from './Foo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();


ReactDOM.render(<Main/>, document.getElementById('main'));
registerServiceWorker();

ReactDOM.render(<Foo name="Tom" age="33" />, document.getElementById('foo'));
registerServiceWorker();


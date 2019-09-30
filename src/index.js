import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/Login/App';
import * as serviceWorker from './views/Login/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

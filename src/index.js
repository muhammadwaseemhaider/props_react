import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
    <App myExp={5*10} title="This is the title" body={["This is the body with ",<b> bold expression</b>, " ", 5+20]} imageUrl="https://picsum.photos/seed/picsum/220/100" />,
    
//  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

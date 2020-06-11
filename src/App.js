import React from 'react';

function App(appProps) {
    return (
    <div>
      <MediaCard title={appProps.title} body={appProps.body} imageUrl={appProps.imageUrl} myExp={appProps.myExp} />
      <Gate isOpen= {true} />
    </div>
    );
}

function MediaCard(props) {
  return (
    <div>
      <h2>
        {props.title}
      </h2>
       <p>
         {props.body}  &nbsp; Another expression &nbsp;
         {props.myExp}
       </p>
       <img src={props.imageUrl} alt=''/>
    </div>
  );
}

const Gate = ({isOpen}) => (
  <p> Gate is {isOpen ? "Open" : "Closed"} implemented with arrow function</p>
  );

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
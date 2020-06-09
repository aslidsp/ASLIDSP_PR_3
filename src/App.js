import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App ({name, address}) { 
 return <div> 
          Hello <strong>{name}!</strong> 
          <h3>This is Assignment 3</h3>
          Previous Assignments:
          <ul>
            <li> Assignment 1 </li>
            <li> Assignment 2 </li>
          </ul> 
          <h4>Total Assignments {2+1}</h4>
        </div>;
}

export default App;

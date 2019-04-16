// const greeter = require("./Greeter");
// document.getElementById('root').appendChild(greeter()); 

import './main.css'

import React from 'react' 
import { render } from 'react-dom'
import Greeter from './Greeter.js'
  
render(<Greeter />, document.getElementById('root'));   
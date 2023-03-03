import React from 'react';
import ReactDom from "react-dom"
import c from './PHOTO.jpg';
import './index.css';

const user=(
  <div>
    <img className="image" src={c} alt="Chandan image"/>
  </div>
)
const header= (
  
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
const app=(
    <div>
        {header}
        {user}
    </div>
)
const rootElement = document.getElementById('root')
ReactDom.render(app,rootElement);

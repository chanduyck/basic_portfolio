// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import c from "./PHOTO.jpg"
// JSX element, header
const welcome="Welcome to 30 Days Of React"
const title="Getting Started React"
const subtitle="JavaScript Library"
const Instructor="Chandan Kumar"
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle} </h3>
      <p>{Instructor}</p>

      <small>Date: Oct 1, 2020</small>
    </div>
  </header>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li> JavaScript</li>
      </ul>
    </div>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)
const user=(
  <div>
    <img src={c} alt="Chandan image"/>
  </div>
)
// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
    {user}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
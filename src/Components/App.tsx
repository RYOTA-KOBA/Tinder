import React from 'react'
import '../styles/App.scss'

const App: React.FC = () => {
  return (
    <div id="phone">
      <div id="app">
        <div className="header">
          <div className="top">
            <span className="left">
              <span className="fontawesome-circle"></span>
              <span className="fontawesome-circle"></span>
              <span className="fontawesome-circle-blank"></span>
              <a href="http://rena.to" target="_blank">
                rena.to
              </a>
              <span className="fontawesome-signal"></span>
            </span>
            <span className="center clock"></span>
            <span className="right">
              <span>75%</span>
              <div id="battery"></div>
              <span className="fontawesome-bolt"></span>
            </span>
          </div>
        </div>
        <div id="people"></div>
        <div id="control">
          <div className="button no">
            <a href="#" className="trigger"></a>
          </div>
          <div className="button info">
            <a href="#" className="trigger"></a>
          </div>
          <div className="button yes">
            <a href="#" className="trigger"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

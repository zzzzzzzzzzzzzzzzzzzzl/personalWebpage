import { BrowserRouter } from 'react-router-dom'

import { RightSideContent } from './components/rightSideContent/rightSideContent'

import { LeftSideContent } from './components/leftSideContent'
import React from 'react'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div
            className="navBar"
            style={{ display: 'flex', width: '100%' }}
          ></div>
          <LeftSideContent />
        </div>
        <RightSideContent />
      </div>
    </div>
  )
}

export default App

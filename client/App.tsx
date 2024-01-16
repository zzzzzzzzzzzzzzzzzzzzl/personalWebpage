import { BrowserRouter } from 'react-router-dom'

import { RightSideContent } from './components/rightSideContent/rightSideContent'

import { LeftSideContent } from './components/leftSideContent'
import React from 'react'
import store from './store'
import { toggleDisplay } from './slices/slice'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <div
        onClick={() => {
          store.dispatch(toggleDisplay(!store.getState().slice.display))
        }}
      ></div>
      <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
        <div style={{ width: '100%', overflow: '' }}>
          <div
            className="navBar"
            style={{ display: 'flex', width: '100%' }}
          ></div>
          <LeftSideContent />
        </div>
        <div style={{ flexShrink: '0' }}>
          <RightSideContent />
        </div>
      </div>
    </div>
  )
}

export default App

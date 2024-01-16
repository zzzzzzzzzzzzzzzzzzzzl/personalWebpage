import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import React from 'react'
import './index.css'
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
})

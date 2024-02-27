import React from 'react'
import { TopNav } from './components/topNav/topNav'
import { BottomNav } from './components/footer.js/bottomNav'
import { Content } from './components/content/content'
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <TopNav />
      <Content />
      <BottomNav />
      <div></div>
    </div>
  )
}

export default App

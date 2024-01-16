import React from 'react'
import { TopNav } from './components/topNav/topNav'
import { BottomNav } from './components/footer.js/bottomNav'
import { Content } from './components/content/content'

function App() {
  return (
    <div>
      <TopNav />
      <Content />
      <BottomNav />
    </div>
  )
}

export default App

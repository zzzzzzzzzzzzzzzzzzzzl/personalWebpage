import { BottomElements } from './bottomElements'
import BottomNav from '../bottomNav/bottomNav'
import { Elements } from './elements'
import TopNav from '../topNav/topNav'
import React from 'react'
export function RightSideContent() {
  return (
    <div className="">
      <div style={{ borderBottom: '1px solid rgb(71, 71, 71)' }}>
        <TopNav />
        <Elements />
      </div>

      <div
        style={{ borderBottom: '1px solid rgb(71, 71, 71)', padding: '8px' }}
      >
        here
      </div>
      <BottomNav />
      <div style={{}}>
        <BottomElements />
      </div>
    </div>
  )
}

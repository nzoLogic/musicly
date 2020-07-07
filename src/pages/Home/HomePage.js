import React from 'react'
import musicians from '../../musician'

const { MusiciansList } = musicians.components

export default function HomePage() {
  return (
    <div style={{
      padding: '0px 16px'
    }}>
      <h1>Welcome to Musicly</h1>
      <MusiciansList />
    </div>
  )
}
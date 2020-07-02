import React from 'react'
import { MusiciansList } from '../../Musicians-List'
import { musicians } from '../../data'


export default function HomePage() {
  return (
    <div style={{
      padding: '0px 16px'
    }}>
      <h1>Welcome to Musicly</h1>
      <MusiciansList musicians={musicians} />
    </div>
  )
}
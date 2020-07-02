import React from 'react'

export function MusiciansList({ musicians }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '8px',
    }}>
      {
        musicians.map(
          ({ _id, name }) =>
            <div>
              <p>{name}</p>
            </div>
        )
      }
    </div>
  )
}
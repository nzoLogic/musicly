import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicians } from '../actions'

const styles = {
  card: {
    borderRadius: '0.5px',
    boxShadow: '0 1px 1px 0 rgba(66, 66, 66, 0.08),0 1px 3px 1px rgba(66, 66, 66, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 8px 8px 8px',
    width: '',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '32px',
    justifyItems: 'center',
  },
  image: {
    maxHeight: '256px',
    width: '100%',
  }
}

export function MusiciansList() {
  const { musicians, isLoading, error } = useSelector(({ musician }) => musician)

  const dispatch = useDispatch()

  // initial call, #TODO: change to be flexible with musicians data becomes dynamic
  useEffect(() => {
    getMusicians(dispatch)
  }, [])

  return (
    <div style={styles.container}>
      {isLoading ?
        <h2>Loading....</h2> :
        error ?
          <div>Error: ${error}</div> :
        musicians.map(
          ({ _id, name, image, location, genre }) =>
            <div style={styles.card} key={_id}>
              <div className="sm-p">
                <h4>{name}</h4>
                <span> - {genre}</span>
              </div>
              <div>
                <img style={styles.image} alt={`${name} performing live`} src={image} />
              </div>
              <div style={{ padding: '8px'}}>
                <span>{location}</span>
              </div>
            </div>
        )
      }
    </div>
  )
}
import React from 'react'

const styles = {
  card: {
    borderRadius: '0.5px',
    boxShadow: '0 1px 1px 0 rgba(66, 66, 66, 0.08),0 1px 3px 1px rgba(66, 66, 66, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'stretch',
    alignItems: 'stretch',
    padding: '0 8px 8px 8px',
    width: '',
  },
  image: {
    // maxWidth: '400px',
    maxHeight: '256px',
    width: '100%',
  }
}
export function MusiciansList({ musicians }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '32px',
      justifyItems: 'center',
    }}>
      {
        musicians.map(
          ({ _id, name, image, location, genre }) =>
            <div style={styles.card}>
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
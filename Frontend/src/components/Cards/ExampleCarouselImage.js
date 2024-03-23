import React from 'react'
import { Image } from 'react-bootstrap'

const ExampleCarouselImage = ({ src }) => {
  
  return (
      <div style={{ maxHeight: '70vh', maxWidth: '100%', overflow: 'hidden' }}>
        <Image src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} fluid />
      </div>
  

  )
}

export default ExampleCarouselImage

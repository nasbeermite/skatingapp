import React from 'react'
import { Image } from 'react-bootstrap'

const ExampleCarouselImage = ({ src }) => {
  
  return (
      <div  className='mw-100 overflow-hidden' style={{maxHeight:'70vh'}}>
        <Image src={src} className='w-100 h-100 object-fit-cover' fluid />
      </div>
  )
}

export default ExampleCarouselImage

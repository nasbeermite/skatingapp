import React from 'react'
import ImageLoader from '../ImageLoader'


const ExampleCarouselImage = ({ src }) => {
  
  return (
      <div  className='mw-100 overflow-hidden' style={{maxHeight:'70vh'}}>
        {/* <ImageLoader src={src} alt="carousal"  className='w-100 h-100 object-fit-cover' fluid /> */}
        <ImageLoader src={src} alt="carousel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      </div>
  )
}

export default ExampleCarouselImage

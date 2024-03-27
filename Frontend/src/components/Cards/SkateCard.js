import React from 'react'
import Card from 'react-bootstrap/Card';
import './SkateCard.css'

 
const SkateCard = ({image,skate,price,clr}) => {
    return (
        <div>
            <Card style={{ maxWidth: '25rem', minHeight: '21.7rem',borderRadius:'0px', border:'0px' }}>
                <Card.Img variant="top" height={390} src={image} loading='lazy' className='object-fit-cover'  style={{border:'0px', borderRadius:'0px'}}/>
                <Card.Footer className='skate-footer' style={{ backgroundColor: clr,color:'white', borderRadius:'0px', border:'0px' }}>
                    <div className='skate-hover'>{skate} </div> 
                    <div className='skate-hover'>{price}</div>
                </Card.Footer>
            </Card>

        </div>
    )
}

export default SkateCard

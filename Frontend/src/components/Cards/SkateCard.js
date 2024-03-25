import React from 'react'
import Card from 'react-bootstrap/Card';
import './SkateCard.css'

 
const SkateCard = ({image,skate,price,clr}) => {
    return (
        <div>
            <Card style={{ maxWidth: '25rem', minHeight: '22rem' }}>
                <Card.Img variant="top" height={390} src={image} style={{ objectFit: 'cover' }} />
                <Card.Footer className='skate-footer' style={{ backgroundColor: clr,color:'white' }}>
                    <div className='skate-hover'>{skate} </div>
                    <div className='skate-hover'>{price}</div>
                </Card.Footer>
            </Card>

        </div>
    )
}

export default SkateCard

import React from 'react'
import Card from 'react-bootstrap/Card';
import './ItemCard.css'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({image,title,ft,stock}) => {
    const navigate=useNavigate()
    return (
        <div>
            <Card style={{ maxWidth: '25rem', minHeight: '23rem' }}>
                <Card.Img variant="top" height={250} src={image} style={{objectFit:'cover'}}/>
                <Card.Body>
                    <Card.Text className="text-center">
                        {title}
                    </Card.Text>
                    <hr />
                 <p style={{color:'green'}}>{stock}</p>
                </Card.Body>
                <Card.Footer className='item-footer' onClick={()=>navigate('/details')} >
                    {ft}

                </Card.Footer>
            </Card>
        </div>
    )
}

export default ItemCard

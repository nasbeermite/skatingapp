import React from 'react'
import Card from 'react-bootstrap/Card';
import './ItemCard.css'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ image, title, ft, stock }) => {
    const navigate = useNavigate()
    return (
        <div>

            <Card className="item-card">
                <Card.Img variant="top" height={200} src={image} style={{ objectFit: 'cover' }} loading='lazy' />
                <Card.Body>
                    <Card.Text className="text-center">{title}</Card.Text>
                    <hr />
                    <p className="text-success">{stock}</p>
                </Card.Body>
                <Card.Footer className="item-footer d-flex justify-content-center align-items-center" onClick={() => navigate('/details')}>
                    {ft}
                </Card.Footer>
            </Card>

        </div>
    )
}

export default ItemCard

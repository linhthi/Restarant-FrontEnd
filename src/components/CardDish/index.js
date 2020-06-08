import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardDish() {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.foody.vn/res/g2/12906/prof/s640x400/foody-mobile-5-jpg.jpg" />
            <Card.Body>
                <Card.Title className="text-center" style={{color:'red'}}>Cơm gà Hải Nam</Card.Title>
                <Card.Title className="text-center">Giá: 30000</Card.Title>
                <Card.Text className="text-center" >Com ngon chuan vi</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardDish;
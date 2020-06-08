import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function MenuPage() {

    useEffect(() => {
        fetchDishes();
    }, []);
    
    const [dishes, setDishes] = useState([]);

    const fetchDishes = () => {

        axios.get(`https://raw.githubusercontent.com/yourdpm/React-Tutorial/master/dish.json`)
            .then(res => {
                const dishes = res.data;
                setDishes(dishes);
        });
    }

    return(
        
        <ul className="list-inline" style={{marginTop: "40px", marginLeft: "30px"}}>
        {dishes.map(dish => (
            <li className="list-inline-item" key={dish.id}>
                <Card style={{ width: '15rem' , marginTop:'20px'}}>
                    <Card.Img variant="top" src={dish.image} />
                    <Card.Body>
                        <Card.Title className="text-center" style={{color:'red'}}>{dish.name}</Card.Title>
                        <Card.Title className="text-center">Giá: {dish.cost}</Card.Title>
                        <Card.Text className="text-center" >{dish.description}</Card.Text>
                    </Card.Body>
                </Card>
            </li>
        ))}
    </ul>
    );
}

export default MenuPage;
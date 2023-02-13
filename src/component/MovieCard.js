import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export const MovieCard = ({mov}) => {
  return (
 <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mov.img} />
          <Card.Body>
            <Card.Title>{mov.title}</Card.Title>
            <Card.Text>
             {mov.description}
            </Card.Text>
            <Link to={`/details/${mov.id}`}>
            <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    }
    export default MovieCard;
  

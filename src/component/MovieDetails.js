import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const MovieDetails = ({list}) => {
    const {idmov} = useParams()
    console.log(idmov)
    const movie = list.find((el) => el.id == idmov)
    console.log(movie)
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.img} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
       {movie.description}
      </Card.Text>
      <Link to={'/'}>
      <button variant="primary">Retour</button>
      </Link>
    </Card.Body>
  </Card>
  )
}

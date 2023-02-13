import React from 'react'
import MovieCard from './MovieCard'

 const MovieList = ({list}) => {
  return (
    <div>
    {list.map((el)=>(
        <MovieCard mov={el} key={el.id} />
    )
        )}
    </div>
  )
}
export default MovieList

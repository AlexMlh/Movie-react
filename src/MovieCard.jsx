import React from 'react'

export default function MovieCard(props) {
  const movie = props.movie;
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src= {movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}
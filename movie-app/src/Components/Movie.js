import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie" >
      <img src={props.img} alt="caption" height={175} width={175} />
      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
  )
}

export default Movie

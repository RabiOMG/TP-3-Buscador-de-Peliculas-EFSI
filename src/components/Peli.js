import React from 'react'
import { Link } from 'react-router-dom'

export default function Peli({pelicula, type}) {
  return (
    <div className="movie-card">
      <Link to={"../" + type + "/" + pelicula.id}>
        <figure className="card-banner">
          <img
            src={"http://image.tmdb.org/t/p/w780" + pelicula.poster_path}
            alt={pelicula.title ? pelicula.title : pelicula.name}
          />
        </figure>
      </Link>

      <div className="title-wrapper">
        <a href="./movie-details.html">
          <h3 className="card-title">{pelicula.title ? pelicula.title : pelicula.name}</h3>
        </a>

        <time dateTime={pelicula?.release_date}>{pelicula?.release_date}</time>
      </div>

      <div className="card-meta">

        <div className="rating">
          <ion-icon name="star"></ion-icon>

          <data>{pelicula.vote_average}</data>
        </div>
      </div>
    </div>
  )
}

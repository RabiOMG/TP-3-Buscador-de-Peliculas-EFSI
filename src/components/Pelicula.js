import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Pelicula() {
  const { id, type } = useParams()
  const [pelicula, setPelicula] = useState({})
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=bc4fb5b4be391ae08cd2f6651e04b412&language=es-ES`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPelicula(data))
      .then(() => setLoading(false))
  }, [id])
  if (Loading) return <div>Cargando...</div>
  console.log('http://image.tmdb.org/t/p/w1280' + pelicula.backdrop_path)
  //style={{background: `url(${'http://image.tmdb.org/t/p/w1280' + pelicula.backdrop_path}) no-repeat `}}
  return (
    <section className="movie-detail"  >
      <div className="container">
        <figure className="movie-detail-banner">
          <img
            src={'http://image.tmdb.org/t/p/w780' + pelicula.poster_path}
            alt={pelicula.title ? pelicula.title : pelicula.name}
          />

          <button className="play-btn">
            <ion-icon name="play-circle-outline"></ion-icon>
          </button>
        </figure>

        <div className="movie-detail-content">
          <p className="detail-subtitle">Nuevo!</p>

          <h1 className="h1 detail-title">
            {pelicula.title ? pelicula.title : pelicula.name}
          </h1>

          <div className="meta-wrapper">
            {pelicula.adult && (
              <div className="badge-wrapper">
                <div className="badge badge-fill">+18</div>
              </div>
            )}

            <div className="ganre-wrapper">
              {pelicula.genres.map((genre, i) => <a href="#" key={i}>{genre.name}</a>)}
            </div>

            <div className="date-time">
              <div>
                <ion-icon name="calendar-outline"></ion-icon>

                <time dateTime={pelicula.release_date ? pelicula.release_date : pelicula.first_air_date}>{pelicula.release_date ? pelicula.release_date : pelicula.first_air_date}</time>
              </div>
            </div>
          </div>

          <p className="storyline">
            {pelicula.overview}	
          </p>

          <div className="details-actions">
            <button className="share">
              <ion-icon name="share-social"></ion-icon>

              <span>Compartir</span>
            </button>

            <div className="title-wrapper">
              <p className="title">Prime Video</p>

              <p className="text">Canales de Streaming</p>
            </div>

            <button className="btn btn-primary">
              <ion-icon name="play"></ion-icon>

              <span>Mira Ahora</span>
            </button>
          </div>

          <a className="download-btn">
            <span>Descargar</span>

            <ion-icon name="download-outline"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  )
}

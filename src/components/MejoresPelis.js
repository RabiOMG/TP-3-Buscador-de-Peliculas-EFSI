import React, {useState, useEffect} from 'react'
import Peli from './Peli'

export default function MejoresPelis() {
    const apiKey= "bc4fb5b4be391ae08cd2f6651e04b412"
    const [Content, setContent] = useState({})
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-ES&page=1`
        fetch(url)
        .then(res => res.json())
        .then(data => setContent(data))
        .then(() => setLoading(false))
    }, [])
    if(Loading) return <div>Cargando...</div>
  return (
    <section class="top-rated">
        <div class="container">

          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Peliculas mejor Valoradas</h2>

          <ul class="movies-list">
            {Content.results.map((pelicula, i) => (
                <li key={i}>
                    <Peli pelicula={pelicula} type="movie" />
                </li>
            ))}
          </ul>

        </div>
      </section>
  )
}

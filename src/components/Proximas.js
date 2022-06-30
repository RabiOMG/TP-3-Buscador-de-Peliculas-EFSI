import React, {useState, useEffect} from 'react'
import Peli from './Peli'

export default function Proximas() {
    const apiKey= "bc4fb5b4be391ae08cd2f6651e04b412"
    const [IsMovie, setIsMovie] = useState(true)
    const [Content, setContent] = useState({})
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        let url = IsMovie ? `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-ES&page=1` 
        : `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=es-ES&page=1`
        fetch(url)
        .then(res => res.json())
        .then(data => setContent(data))
        .then(() => setLoading(false))
    }, [IsMovie])
    if(Loading) return <div>Cargando...</div>

  return (
    <section className="upcoming">
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <h2 className="h2 section-title">{IsMovie ? "Proximas Peliculas" : "Shows de Hoy"}</h2>
          </div>

          <ul className="filter-list">
            <li>
              <button className="filter-btn" onClick={()=>setIsMovie(true)} disabled={IsMovie}>Peliculas</button>
            </li>

            <li>
              <button className="filter-btn" onClick={()=>setIsMovie(false)} disabled={!IsMovie}>Series</button>
            </li>
          </ul>
        </div>

        <ul className="movies-list  has-scrollbar">
            {Content.results.map((pelicula, i) => (
                <li key={i}>
                    <Peli pelicula={pelicula} type={IsMovie ? 'movie' : 'tv'} />
                </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

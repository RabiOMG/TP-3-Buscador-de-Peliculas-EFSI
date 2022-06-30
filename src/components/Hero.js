import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">RabiPelis</p>

          <h1 className="h1 hero-title">
            Mira todas las peliculas que <strong>quieras</strong>
          </h1>

          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">PG 18</div>

              <div className="badge badge-outline">HD</div>
            </div>

            <div className="date-time">
              <div>
                <ion-icon name="calendar-outline"></ion-icon>

                <time dateTime="2022">2022</time>
              </div>

              <div>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT128M">128 min</time>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">
            <ion-icon name="play"></ion-icon>

            <span>Mira ahora</span>
          </button>
        </div>
      </div>
    </section>
  )
}

import './style.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Pelicula from './components/Pelicula'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <article>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:type/:id" element={<Pelicula />} />
          </Routes>
        </article>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

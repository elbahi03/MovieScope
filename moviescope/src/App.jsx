import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './compenents/Header'
import Footer from './compenents/Footer'
import List from './compenents/List'
import Detail from './compenents/Detail'
import Home from './page/Home'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/movies" element={<List />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App

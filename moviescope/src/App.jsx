import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './compenents/Header'
import Footer from './compenents/Footer'
import List from './compenents/List'
import Detail from './compenents/Detail'
function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
     <Footer />
    </>
  )
}

export default App

import React from 'react'
import Mycarousel from '../compontes/Home/carousel'
import Cardlist from '../compontes/Home/homeCard/cardList'
import HeaderUser from '../compontes/General/headerUser'
import Footer from '../compontes/General/footer'

export default function HomeUser() {
  return (
    <>
    <style>
      {`
      body {
        background-color: #FAF4DB;
      }
      `}
    </style>
    <div>
      <HeaderUser/>
      <Mycarousel/>
      <h1 style={{ textAlign:'center', fontFamily: "cursive", fontWeight:'bolder' }}>Bienvenue sur <span style={{  color:'#ffc62a' }}>PIP </span></h1>
      <h5 style={{ textAlign:'center', fontFamily: "cursive", padding:'40px' }}>Découvrez notre site web offrant une dashboard pour visualiser les KPIs et une page de simulation pour optimiser la planification des lots de production en fonction des temps d'exécution et des capacités des machines.</h5>
      <Cardlist/>
      <Footer/>
    </div>
    </>
  )
}
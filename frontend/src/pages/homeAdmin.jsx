import React from 'react'
import Mycarousel from '../compontes/Home/carousel'
import CardlistAdmin from '../compontes/Home/homeCard/cardListAdmin'
import HeaderAdmin from '../compontes/General/headerAdmin'
import Footer from '../compontes/General/footer'

export default function HomeAdmin() {
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
      <HeaderAdmin/>
      <Mycarousel/>
      <h1 style={{ textAlign:'center', fontFamily: "cursive", fontWeight:'bolder' }}>Bienvenue sur <span style={{  color:'#ffc62a' }}>PIP </span></h1>
      <h5 style={{ textAlign:'center', fontFamily: "cursive", padding:'40px' }}>Découvrez notre site web offrant une dashboard pour visualiser les KPIs et une page de simulation pour optimiser la planification des lots de production en fonction des temps d'exécution et des capacités des machines.</h5>
      <CardlistAdmin/>
      <Footer/>
    </div>
    </>
  )
}
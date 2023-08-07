import React from 'react'
import ProductsListAdmin from '../compontes/Simulation/SimulationCard/productListeAdmin';
import HeaderAdmin from '../compontes/General/headerAdmin'
import { Container} from "react-bootstrap";
import Footer from '../compontes/General/footer';

export default function SimulationAdmin() {
  return (
    <>
    <style>
      {`
      body {
        background-color: #FAF4DB;
      }
      `}
    </style>
    <HeaderAdmin/>
    <Container style={{ marginTop: '100px' , width:'100%' }}>
      <h1 style={{ textAlign:'center', fontFamily: "cursive", fontWeight:'bolder', marginBottom:'20px' }}>Modifiez, supprimez ou ajoutez des produits</h1>
      <ProductsListAdmin/>
    </Container>
    <Footer/>
    </>
  )
}

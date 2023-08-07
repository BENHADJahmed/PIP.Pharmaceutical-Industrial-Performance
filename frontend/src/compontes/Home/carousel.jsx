import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Pip from '../../Image/PIP.png';

export default function Mycarousel() {
  return (
    <div>
      <Carousel style={{ marginBottom: '40px' }}>
        <Carousel.Item>
          <div style={{ backgroundColor: '#ffc62a', position: 'relative', height: '500px', width: '100%' }} className="d-block w-100">
            <img src={Pip} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '660px', height: '500px' }} alt="carousel-img" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://previews.123rf.com/images/areeya/areeya1601/areeya160100070/51552388-la-forme-ovale-de-l-utilisation-de-capsules-de-g%C3%A9latine-molle-dans-la-fabrication-pharmaceutique.jpg' style={{ width: '660px', height: '500px' }} alt="carousel-img" className="d-block w-100" />
          <Carousel.Caption>
            <h1 style={{ color: '#FAF4DB', fontFamily: "cursive", fontWeight: 'bolder' }}>Optimisez votre performance industrielle aujourd'hui.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://img.chemie.de/Portal/News/6461ec118d860_O2jMuCqSJ.png?tr=w-1232,h-924,cm-extract,x-0,y-0:n-xzoom' style={{ width: '660px', height: '500px' }} alt="carousel-img" className="d-block w-100" />
          <Carousel.Caption>
            <h1 style={{ color: '#FAF4DB', fontFamily: "cursive", fontWeight: 'bolder' }}>Atteignez l'excellence grâce à la performance industrielle.</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

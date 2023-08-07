import React from 'react';
import Mycarousel from '../compontes/Home/carousel';
import Header from '../compontes/General/header';
import Footer from '../compontes/General/footer';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function Home() {
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
        <Header />
        <Mycarousel />
        <Container>
          <section style={{}}>
            <Row style={{ marginBottom: '40px' }}>
              <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontWeight: 'bolder' }}>
                <span style={{ color: '#ffc62a' }}>P</span>harmaceutical <span style={{ color: '#ffc62a' }}>I</span>
                ndustry <span style={{ color: '#ffc62a' }}>P</span>erformance
              </h1>
            </Row>
            <Row>
              <Col>
                <h2 style={{ fontFamily: 'cursive', fontWeight: 'bolder' }}>Performance et Excellence pour l'Industrie Pharmaceutique</h2>
                <p style={{ fontFamily: 'cursive' }}>
                  La performance industrielle est un élément essentiel dans l'optimisation des opérations de fabrication. Elle
                  englobe divers aspects tels que l'efficacité, la productivité et la qualité des processus industriels.
                </p>
                <p style={{ fontFamily: 'cursive' }}>
                  Les indicateurs de performance jouent un rôle clé dans la mesure et l'évaluation de la performance industrielle.
                  Ils permettent de quantifier et d'analyser les résultats obtenus, en se basant sur des métriques spécifiques
                  telles que le taux de rendement global (TRG), le temps de cycle, le taux de défaut, etc.
                </p>
                <p style={{ fontFamily: 'cursive' }}>
                  La simulation des lots industriels est également utilisée pour optimiser les opérations de fabrication. En
                  prenant en compte les capacités des machines et les temps d'exécution, la simulation permet de planifier et de
                  prévoir les performances attendues, d'identifier les goulots d'étranglement potentiels et d'optimiser la
                  productivité.
                </p>
              </Col>
              <Col lg="3">
                <Card style={{ width: '100%', background: 'rgba(0, 0, 0, 0.6)' }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center', fontSize: '1.5rem', color: '#ffc62a', fontFamily: 'cursive' }}>
                      Qui sommes-nous ?
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'center', fontSize: '1rem', color: '#ffc62a', fontFamily: 'cursive' }}>
                      Chez PIP, nous nous efforçons de fournir des solutions innovantes et des services d'excellence pour
                      l'industrie pharmaceutique. Notre équipe d'experts se consacre à améliorer les performances et
                      l'efficacité des entreprises du secteur.
                    </Card.Text>
                    <Button style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '10px' }} className="mx-2">
                      En savoir plus
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
        <Footer />
      </div>
    </>
  );
}

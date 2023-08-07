import React, { useState } from 'react';
import ProductsList from '../compontes/Simulation/SimulationCard/productsList';
import SimulationMachine from '../compontes/Simulation/simulationMachine';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MonthSelector from '../compontes/Simulation/monthSelecter';
import { WorkingDaysCounter } from '../function/workingDaysCounter';
import HeaderUserSimulation from '../compontes/General/headerUserSimulation';
import Footer from '../compontes/General/footer';
import '../css/simulation.css';

export default function Simulation() {
  const [simulationId, setSimulationId] = useState('simulation1');
  const [search, setSearch] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('Janvier');

  const inputHandler = (event) => setSearch(event.target.value);
  const handleSimulationSelection = (simulationId) => {
    setSimulationId(simulationId);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const tempsDisponible = WorkingDaysCounter(selectedMonth) * 8;
  console.log(WorkingDaysCounter(selectedMonth));

  return (
    <>
      <style>
        {`
        body {
          background-color: #FAF4DB;
        }
        `}
      </style>
      <HeaderUserSimulation inputHandler={inputHandler} />
      <Container style={{ marginTop: '100px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontWeight: 'bolder', marginBottom: '20px' }}>Simulez la production</h1>
        <Row className="buttons-row">
          <Col>
            <h4 style={{ display: 'inline-block', marginRight: '8px', fontFamily: 'cursive', fontWeight: 'bold' }}>
              Choisissez la machine où vous allez allouer vos produits :
            </h4>
            <Button onClick={() => handleSimulationSelection('simulation1')} className={simulationId === 'simulation1' ? 'active' : ''}>
              Machine 1
            </Button>
            <Button onClick={() => handleSimulationSelection('simulation2')} className={simulationId === 'simulation2' ? 'active' : ''}>
              Machine 2
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col>
            <h4 style={{ display: 'inline-block', marginRight: '8px', fontFamily: 'cursive', fontWeight: 'bold' }}>Choisissez le mois de simulation : </h4>
            <MonthSelector selectedMonth={selectedMonth} handleMonthChange={handleMonthChange} />
          </Col>
        </Row>
      </Container>
      <ProductsList simulationId={simulationId} search={search} />
      <SimulationMachine simulationId={simulationId} tempsDisponible={tempsDisponible} />
      <Footer />
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import ActiviteTable from '../compontes/Dashboard/Tables/activiteTable';
import BarChart from '../compontes/Dashboard/barChart';
import { getAllBoites, getAllLots, getAllBlisters } from '../function/api';
import { getTotalChartData,getMoyenneChartData, getMinYear, getMaxYear } from '../function/chartData';
import DashboardMachines from '../compontes/Dashboard/dashboardMachines';
import HeaderUser from '../compontes/General/headerUser';
import Footer from '../compontes/General/footer';
import '../css/buttons.css';


export default function Dashboard() {
  const [boites, setBoites] = useState([]);
  const [lots, setLots] = useState([]);
  const [blisters, setBlisters] = useState([]);
  const [filtre, setFiltre] = useState('boite');
  const [chartDataTotal, setChartDataTotal] = useState();
  const [chartDataMoyenne, setChartDataMoyenne] = useState();
  const [titreGraphiqueTotal, setTitreGraphiqueTotal] = useState('');
  const [titreGraphiqueMoynne, setTitreGraphiqueMoyenne] = useState('');
  


  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    updateChartData();
  }, [boites, lots, blisters, filtre]);

  async function loadData() {
    const boitesData = await getAllBoites();
    const lotsData = await getAllLots();
    const blistersData = await getAllBlisters();

    setBoites(boitesData);
    setLots(lotsData);
    setBlisters(blistersData);
  }

  function updateChartData() {
    let donnees;
    let nouveauTitreTotal;
    let nouveauTitreMoyenne;

    if (filtre === 'boite') {
      donnees = boites;
      nouveauTitreTotal = `Total Boîte de ${getMinYear(boites)} à ${getMaxYear(boites)}`;
      nouveauTitreMoyenne = `Moyenne Boîte de ${getMinYear(boites)} à ${getMaxYear(boites)}`;

    } else if (filtre === 'lot') {
      donnees = lots;
      nouveauTitreTotal = `Total Lot de ${getMinYear(lots)} à ${getMaxYear(lots)}`;
      nouveauTitreMoyenne = `Moyenne Lot de ${getMinYear(lots)} à ${getMaxYear(lots)}`;
    } else {
      donnees = blisters;
      nouveauTitreTotal = `Total Blister de ${getMinYear(blisters)} à ${getMaxYear(blisters)}`;
      nouveauTitreMoyenne = `Moyenne Blister de ${getMinYear(blisters)} à ${getMaxYear(blisters)}`;
    }

    const newTotalChartData = getTotalChartData(donnees);
    const newMoyenneChartData = getMoyenneChartData(donnees);
    setChartDataTotal(newTotalChartData);
    setChartDataMoyenne(newMoyenneChartData);
    setTitreGraphiqueTotal(nouveauTitreTotal);
    setTitreGraphiqueMoyenne(nouveauTitreMoyenne);
  }

  const handleFiltreChange = (nouveauFiltre) => {
    setFiltre(nouveauFiltre);
  };

  return (
    <>
    <style>
      {`
      body {
        background-color: #FAF4DB;
      }
      `}
    </style>
    <HeaderUser/>
    <Container  style={{ marginTop: '100px' , width:'100%' }}>
    <h1 style={{ textAlign:'center', fontFamily: "cursive", fontWeight:'bolder', marginBottom:'20px' }}>Bienvenue sur le dashboard</h1>
      <Row className="buttons-row">
        <Col>
        <h4 style={{display:'inline-block', marginRight:'8px', fontFamily: "cursive", fontWeight:'bold' }}>Consultez facilement le nombre d'activités filtrées par : </h4>
          <Button style={{marginBottom:'8px', width:'70px' }} className={filtre === 'boite' ? 'active' : ''} onClick={() => handleFiltreChange('boite')}>
            Boîte
          </Button>
          <Button style={{marginBottom:'8px', width:'70px' }} className={filtre === 'lot' ? 'active' : ''} onClick={() => handleFiltreChange('lot')}>
            Lot
          </Button>
          <Button style={{marginBottom:'8px', width:'70px' }} className={filtre === 'blister' ? 'active' : ''} onClick={() => handleFiltreChange('blister')}>
            Blister
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {filtre === 'boite' && <ActiviteTable donnees={boites} />}
          {filtre === 'lot' && <ActiviteTable donnees={lots} />}
          {filtre === 'blister' && <ActiviteTable donnees={blisters} />}
        </Col>
      </Row>
      <Row>
        <Col md="6" >
          {chartDataTotal && <BarChart chartData={chartDataTotal} titre={titreGraphiqueTotal} />}
          </Col>
          <Col md="6">
          {chartDataMoyenne && <BarChart chartData={chartDataMoyenne} titre={titreGraphiqueMoynne} />}
          </Col>
      </Row>
      <Row>
      
        <DashboardMachines/>
      </Row>


    </Container>
    <Footer/>
    </>
  );
}

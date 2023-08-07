import React, { useState, useEffect, useRef } from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { getMachineChartData } from '../../function/chartData';
import BarChart from './barChart';
import MachineTable from './Tables/machineTable';
import { Container, Row, Col,Button } from "react-bootstrap";
import { getAllMachines } from '../../function/api';
import '../../css/buttons.css';

Chart.register(CategoryScale);

const DashboardMachines = () => {
  const [machines, setMachines] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState('');
  const [selectedMachine, setSelectedMachine] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    // Appel de la fonction getAllMachine pour obtenir les données
    getAllMachines()
      .then(data => setMachines(data));
  }, []);

  useEffect(() => {
    if (selectedPhase !== '') {
      const filteredMachines = machines.filter(machine => machine.phase === selectedPhase);
      const firstMachine = filteredMachines.length > 0 ? filteredMachines[0].nomMachine : '';
      const filteredMonths = filteredMachines.filter(machine => machine.nomMachine === firstMachine);
      const firstMonth = filteredMonths.length > 0 ? filteredMonths[0].mois : '';
      setSelectedMachine(firstMachine);
      setSelectedMonth(firstMonth);
    }
  }, [selectedPhase, machines]);

  const handlePhaseClick = (phase) => {
    setSelectedPhase(phase);
    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 1);
  };

  const handleMachineClick = (machine) => {
    setSelectedMachine(machine);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const phasesNames = [...new Set(machines.map(machine => machine.phase))];
  const phaseSelected = machines.filter(machine => machine.phase === selectedPhase);
  const machinesNames = [...new Set(phaseSelected.map(machine => machine.nomMachine))];
  const machinePhaseSelected = machines.filter(machine => machine.nomMachine === selectedMachine && machine.phase === selectedPhase);
  const monthsNames = [...new Set(machinePhaseSelected.map(machine => machine.mois))];
  const monthMachinePhaseSelected = machines.filter(machine => machine.nomMachine === selectedMachine && machine.phase === selectedPhase && machine.mois === selectedMonth);

  const titre = monthMachinePhaseSelected[0] && `Repartition des Pertes de ${monthMachinePhaseSelected[0].nomMachine} pour ${monthMachinePhaseSelected[0].mois}`;

  const newMachineChartData = monthMachinePhaseSelected[0] && getMachineChartData(monthMachinePhaseSelected[0]);

  return (
    <>
      <div ref={bottomRef}></div>
      <Container>
        <Row >
          <Col>
            <h4 style={{ display: 'inline-block', marginRight: '8px', fontFamily: "cursive", fontWeight: 'bold' }}>Consultez les indicateurs de performance essentiels pour la phase : </h4>
          </Col>
        </Row>
        <Row className="buttons-row" >
          <Col lg='4' md='0' xs='0'></Col>
          {phasesNames.map(phase => (
            <Col lg="2" md='3' key={phase}>
              <Button
                style={{
                  margin: "5px",
                  width: '160px',
                }}
                onClick={() => handlePhaseClick(phase)}
                className={selectedPhase === phase ? 'active' : ''}
              >
                {phase === 'cond' ? 'Conditionnement' : "Fabrication"}
              </Button>
            </Col>
          ))}
        </Row>
        <Row className="buttons-row">
          <Col lg='4' md='0' xs='0'></Col>
          {machinesNames.map(machineName => (
            <Col lg='2' md='3' key={machineName}>
              <Button
                style={{
                  margin: "5px",
                  width: '160px',
                  display: 'inline-block'
                }}
                className={selectedMachine === machineName ? 'active' : ''}
                onClick={() => handleMachineClick(machineName)}
              >
                {machineName}
              </Button>
            </Col>
          ))}
        </Row>
        <Row className="buttons-row justify-content-md-center">
          {monthsNames.map(month => (
            <Col lg='auto' md='auto' xs='auto' key={month}>
              <Button
                style={{
                  display: 'inline',
                  fontSize: '0.75rem'
                }}
                className={selectedMonth === month ? 'active' : ''}
                onClick={() => handleMonthClick(month)}
              >
                {month}
              </Button>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs lg="1"></Col>
          <Col>
            {monthMachinePhaseSelected[0] && <MachineTable {...monthMachinePhaseSelected[0]} />}
          </Col>
          <Col xs lg="1"></Col>
        </Row>
        <Row>
          <Col xs lg="2"></Col>
          <Col>
            {monthMachinePhaseSelected[0] && <BarChart chartData={newMachineChartData} titre={titre} />}
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardMachines;

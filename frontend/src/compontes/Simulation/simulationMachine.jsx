import { useSelector } from 'react-redux';
import SimulationListe from './simulationListe';
import { Container, Row, Col } from 'react-bootstrap';

export default function SimulationMachine(props) {
  const simulation1 = useSelector((state) => state.simulation.simulations.simulation1);
  const simulation2 = useSelector((state) => state.simulation.simulations.simulation2);

  const { simulationId, tempsDisponible } = props;
  const isDisabledCard = simulationId === 'simulation1';

  return (
    <Container>
      <Row>
        <Col md='12' lg='12' xl='6'>
          <SimulationListe
            simulation={simulation1}
            simulationId={simulationId}
            className={isDisabledCard ? '' : 'disabled-card'}
            title="Simulation sur la machine 1"
            isDisabledButton={!isDisabledCard}
            totalTemps={simulation1.totalTemps1}
            tempsDisponible={tempsDisponible}
          />
        </Col>
        <Col md='12' lg='12' xl='6'>
          <SimulationListe
            simulation={simulation2}
            simulationId={simulationId}
            className={isDisabledCard ? 'disabled-card' : ''}
            title="Simulation sur la machine 2"
            isDisabledButton={isDisabledCard}
            totalTemps={simulation2.totalTemps2}
            tempsDisponible={tempsDisponible}
          />
        </Col>
      </Row>
    </Container>
  );
}

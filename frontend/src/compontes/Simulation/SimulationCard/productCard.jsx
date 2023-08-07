import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToSimulation } from "../../../store/features/simulationSlice";
import '../../../css/simulation.css'

export default function ProductCard(props) {
  const { item, simulationId } = props;
  const dispatch = useDispatch();

  const handleAddToSimulation = () => {
    dispatch(addToSimulation({ payload: item, simulationId:simulationId }));
  };
console.log(simulationId);


const isDisabledCard =
(simulationId === "simulation1" && item.temps1 === 0) ||
(simulationId === "simulation2" && item.temps2 === 0);

  return (
    <Card className={isDisabledCard ? "disabled-card" : ""} key={item.id} style={{ margin:'5px 0', width:'260px',backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
      <Card.Img variant="top" src={item.img} style={{ height: '200px', width: '100%' }} className={isDisabledCard ? "disabled-card" : ""}/>
      <Card.Body className={isDisabledCard ? "disabled-card" : ""}>
        <Card.Title style={{ height: '20px'}}>{item.name}</Card.Title>
        <Card.Text style={{ height: '20px'}}>temps sur la machine 1 : {item.temps1}H</Card.Text>
        <Card.Text style={{ height: '20px'}}>temps sur la machine 2 : {item.temps2}H</Card.Text>
        <Button onClick={handleAddToSimulation} disabled={isDisabledCard} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: 'auto'  }}>Add to simulation</Button>
      </Card.Body>
    </Card>
  );
}

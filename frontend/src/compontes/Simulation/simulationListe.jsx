import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToSimulation, clearSimulation, decreaseSimulation, getTotals, removeFromSimulation } from '../../store/features/simulationSlice';
import { Card, Button, ListGroup } from 'react-bootstrap';
import emojiYellow from '../../Image/emojiYellow.png';
import emojiRed from '../../Image/emojiRed.png';
import emojiGreen from '../../Image/emojiGreen.png';
import supprimer from '../../Image/delete.png';

export default function SimulationListe(props) {
  const { simulation, simulationId, title, className, isDisabledButton, totalTemps, tempsDisponible, temps } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals({ simulationId: simulationId }));
  }, [simulation, dispatch]);

  const handleAddToSimulation = (item, simulationId) => {
    dispatch(addToSimulation({ payload: item, simulationId: simulationId }));
  };

  const handleDecreaseSimulation = (item, simulationId) => {
    dispatch(decreaseSimulation({ payload: item, simulationId: simulationId }));
  };

  const handleRemoveFromSimulation = (item, simulationId) => {
    dispatch(removeFromSimulation({ payload: item, simulationId: simulationId }));
  };

  const handleClearSimulation = (simulationId) => {
    dispatch(clearSimulation({ simulationId: simulationId }));
  };

  const Occupation = ((totalTemps / tempsDisponible) * 100).toFixed(0);

  let color = '';
  let emoji;
  if (Occupation < 90) {
    color = '#F5D72E';
    emoji = emojiYellow;
  } else if (Occupation >= 90 && Occupation <= 100) {
    color = 'green';
    emoji = emojiGreen;
  } else if (Occupation > 100) {
    color = 'red';
    emoji = emojiRed;
  }

  return (
    <Card style={{ width: '545px', marginBottom: '20px' }} className={className}>
      <Card.Header style={{ fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center' }} className={className}>
        {title}
      </Card.Header>
      {simulation.simulationProducts.length === 0 ? (
        <Card.Body className={className}>
          <Card.Text>Your simulation is currently empty</Card.Text>
        </Card.Body>
      ) : (
        <div className={className}>
          <ListGroup className={`list-group-flush ${className}`}>
            {simulation.simulationProducts &&
              simulation.simulationProducts.map((simulationProduct) => (
                <ListGroup.Item
                  className={`cart-item ${className}`}
                  style={{ padding: '0', margin: '8px 16px' }}
                  key={simulationProduct._id}
                >
                  <div className={`cart-product ${className}`}>
                    <div style={{ width: '100%' }}>
                      <h4 style={{ margin: '0', paddingBottom: '8px' }}>{simulationProduct.name}</h4>
                    </div>
                  </div>
                  <div className={`cart-product-quantity ${className}`}>
                    <Button
                      onClick={() => handleDecreaseSimulation(simulationProduct, simulationId)}
                      disabled={isDisabledButton}
                      style={{
                        backgroundColor: 'black',
                        color: '#ffc62a',
                        borderColor: '#ffc62a',
                        display: 'inline-block',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        padding: '0 10px',
                      }}
                    >
                      -
                    </Button>
                    <div
                      className="count"
                      style={{
                        width: '30px',
                        height: '30px',
                        display: 'inline-block',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      {simulationProduct.productQuantity}
                    </div>
                    <Button
                      onClick={() => handleAddToSimulation(simulationProduct, simulationId)}
                      disabled={isDisabledButton}
                      style={{
                        backgroundColor: 'black',
                        color: '#ffc62a',
                        borderColor: '#ffc62a',
                        display: 'inline-block',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        padding: '0 8px',
                      }}
                    >
                      +
                    </Button>
                    {simulationId === 'simulation1' ? (
                      <div
                        style={{
                          width: '120px',
                          height: '30px',
                          display: 'inline-block',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        {simulationProduct.temps1 * simulationProduct.productQuantity} heures
                      </div>
                    ) : (
                      <div
                        style={{
                          width: '120px',
                          height: '30px',
                          display: 'inline-block',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        {simulationProduct.temps2 * simulationProduct.productQuantity} heures
                      </div>
                    )}
                    <div
                      onClick={() => handleRemoveFromSimulation(simulationProduct, simulationId)}
                      style={{
                        cursor: 'pointer',
                        display: 'inline-block',
                      }}
                    >
                      <img src={supprimer} style={{ width: '22px', height: '22px' }} />
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>

          <ListGroup className={`list-group-flush ${className}`} style={{ borderStyle: 'solid', borderWidth: '1px', borderRadius: '3px' }}>
            <ListGroup.Item className={`cart-item ${className}`} style={{ padding: '0', margin: '8px 16px', fontSize: '1.4rem', fontWeight: 'bold' }}>
              <div className={className}>Total temps nécessaire: {totalTemps} heures</div>
            </ListGroup.Item>
            <ListGroup.Item className={`cart-item ${className}`} style={{ padding: '0', margin: '8px 16px', fontSize: '1.4rem', fontWeight: 'bold' }}>
              <div className={className}>Total temps disponible: {tempsDisponible} heures</div>
            </ListGroup.Item>
            <ListGroup.Item className={`cart-item ${className}`} style={{ padding: '0', margin: '8px 16px', color: color, fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center' }}>
              <div className={className}>Taux d'occupation: {Occupation}%</div>
            </ListGroup.Item>
            <ListGroup.Item className={`cart-item ${className}`} style={{ padding: '0', margin: '8px 16px' }}>
              <div className={className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Img className={className} src={emoji} alt="Smiley" style={{ width: '100px', height: '100px' }} />
              </div>
            </ListGroup.Item>
          </ListGroup>

          <Button
            className="clear-btn"
            onClick={() => handleClearSimulation(simulationId)}
            disabled={isDisabledButton}
            style={{
              backgroundColor: 'black',
              color: '#ffc62a',
              borderColor: '#ffc62a',
              margin: '5px',
            }}
          >
            Clear simulation
          </Button>
        </div>
      )}
    </Card>
  );
}

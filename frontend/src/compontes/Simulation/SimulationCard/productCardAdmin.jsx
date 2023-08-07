import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import '../../../css/simulation.css';
import { updateProduct, deleteProduct } from '../../../function/api';

export default function ProductCardAdmin(props) {
  const { item } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const [formData, setFormData] = useState({
    name: item.name,
    temps1: item.temps1,
    temps2: item.temps2,
    img: item.img
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.temps1]: event.target.value,
      [event.target.temps2]: event.target.value,
      [event.target.img]: event.target.value,
    });
  };

  const handleUpdateClick = () => {
    updateProduct(item._id, formData)
      .then(data => {
        console.log(data);
        setIsEditing(false);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteClick = () => {
    deleteProduct(item._id)
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  console.log(formData);

  return (
    <Card key={item._id} style={{ margin: '5px 0', width: '260px', backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
      {isEditing ? (
        <Card.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTemps1">
              <Form.Label>Temps 1</Form.Label>
              <Form.Control
                type="number"
                name="temps1"
                placeholder="Temps 1"
                value={formData.temps1}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTemps2">
              <Form.Label>Temps 2</Form.Label>
              <Form.Control
                type="number"
                name="temps2"
                placeholder="Temps 2"
                value={formData.temps2}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Image"
                value={formData.img}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button onClick={handleUpdateClick} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '3px auto' }}>Mettre à jour</Button>
            <Button onClick={handleCancelClick} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '3px auto' }}>Annuler</Button>
          </Form>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title style={{ height: '20px' }}>{item.name}</Card.Title>
          <Card.Text style={{ height: '20px' }}>temps sur la machine 1 : {item.temps1}H</Card.Text>
          <Card.Text style={{ height: '20px' }}>temps sur la machine 2 : {item.temps2}H</Card.Text>
          <Card.Text style={{ height: '20px' }}> Img URL : {item.img.substring(0, 10)}H</Card.Text>
          <Button onClick={handleEditClick} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: 'auto' }}>Modifier</Button>
          <Button onClick={handleDeleteClick} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: 'auto' }}>Supprimer</Button>
        </Card.Body>
      )}
    </Card>
  );
}

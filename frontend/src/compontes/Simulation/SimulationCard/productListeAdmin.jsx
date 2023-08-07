import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import ProductCardAdmin from './productCardAdmin';
import Plus from '../../../Image/plus.png';
import { addProduct, getAllProduct } from '../../../function/api';

export default function ProductsListAdmin() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    temps1: 0,
    temps2: 0,
    img: ''
  });
  const [showBlankCard, setShowBlankCard] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    getAllProduct().then(data => setProducts(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addProduct(formData);
      console.log(data);
      setShowBlankCard(false);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleShowBlankCard = () => {
    setShowBlankCard(true);
  };

  const handleRemoveBlankCard = () => {
    setShowBlankCard(false);
  };

  return (
    <Container>
      <Container className="products-container">
        <Row>
          {products.map(product => (
            <Col xs="12" md="6" lg="4" xl="3">
              <ProductCardAdmin key={product._id} item={product} />
            </Col>
          ))}
          {showBlankCard && (
            <Col xs="6" md="3">
              <Card style={{ margin: '5px 0', width: '260px', backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formTemps1">
                      <Form.Label>Temps sur la machine 1</Form.Label>
                      <Form.Control
                        type="text"
                        name="temps1"
                        value={formData.temps1}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formTemps2">
                      <Form.Label>Temps sur la machine 2</Form.Label>
                      <Form.Control
                        type="text"
                        name="temps2"
                        value={formData.temps2}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formImg">
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="text"
                        name="img"
                        value={formData.img.substring(0, 10)}
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Button onClick={handleSubmit} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '3px auto' }}>Ajouter</Button>
                    <Button onClick={handleRemoveBlankCard} style={{ backgroundColor: 'black', color: '#ffc62a', borderColor: '#ffc62a', margin: '3px auto' }}>Annuler</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          )}
          <Col xs={6} md={3}>
            <Card style={{ margin: '5px 0', width: '260px', backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
              <Card.Body onClick={handleShowBlankCard} style={{ cursor: 'pointer' }}>
                <Card.Img src={Plus} style={{ height: '173px' }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

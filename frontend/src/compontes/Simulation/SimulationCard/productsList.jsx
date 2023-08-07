import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './productCard';
import { getAllProduct } from '../../../function/api';

export default function ProductsList(props) {
  const [products, setProducts] = useState([]);
  const { simulationId, search } = props;

  useEffect(() => {
    getAllProduct().then(data => setProducts(data));
  }, []);

  return (
    <Container className="products-container">
      <Row>
        {products
          .filter(article => article.name.toLowerCase().includes(search.toLowerCase()))
          .map(product => (
            <Col xs="12" md="6" lg="4" xl="3">
              <ProductCard key={product._id} item={product} simulationId={simulationId} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

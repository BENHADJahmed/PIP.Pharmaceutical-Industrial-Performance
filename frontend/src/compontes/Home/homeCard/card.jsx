import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Mycard(props) {
  const { link, title, desc, img } = props.homeCard;

  return (
    <div style={{ marginBottom: '10px' }}>
      <Card style={{ width: '100%', background: "rgba(0, 0, 0, 0.6)", height: '100%' }}>
        <a href={link} style={{ textDecoration: 'none' }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", fontSize: "2.5rem", color: '#ffc62a', fontFamily: "cursive", fontWeight: 'bolder' }}>{title}</Card.Title>
            <Card.Text style={{ textAlign: "center", fontSize: "1.8rem", color: '#ffc62a', fontFamily: "cursive" }}>
              {desc}
            </Card.Text>
            <Card.Img variant="top" src={img} style={{ height: '14rem', borderRadius: '3px' }} />
          </Card.Body>
        </a>
      </Card>
    </div>
  )
}

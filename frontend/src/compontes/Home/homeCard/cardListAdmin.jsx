import React from 'react'
import Mycard from './card'
import { Col, Row,Container} from 'react-bootstrap';

export default function CardlistAdmin() {
    const homeCards =[
        {
            img : 'https://www.callcentrehelper.com/images/stories/2017/01/computer-dashboard-760.jpg',
            title: 'Dashboard',
            desc : "Visualiser en un coup d'œil les Indicateurs clés",
            link : '/dashboardAdmin'
            
        },
        {
          img : 'https://cdn-blog.picomto.com/wp-content/uploads/2019/07/smart-manufacturing-1024x683.jpg',
          title: 'Simulation',
          desc : "Simuler pour piloter la performance industrielle",
          link : '/simulationAdmin',
          
      }
      
      ];
      return (
        <Container>
          <Row>
            {homeCards.map(card => (
              <Col md="6">
                <Mycard className='grid-item' homeCard={card} />
              </Col>
            ))}
          </Row>
        </Container>
      );
}

import React from 'react';
import Slider from '../../components/Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
    return(
       <Container>
           <Row>
               <Col sm={1}></Col>
               <Col sm={10}>
                   <Slider />
               </Col>
               <Col sm={1}></Col>
           </Row>
       </Container>
    )
}

export default HomePage;
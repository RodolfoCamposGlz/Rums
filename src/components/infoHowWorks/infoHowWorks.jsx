import React from 'react';
import { Container, Row } from 'reactstrap';
import search from '../../images/search.png';
import pin from '../../images/pin.png';
import backpack from '../../images/backpack.png';
// import '../Components.scss';

const ComoFunciona = () => {
  return (
    // <div className="container-app">
    <Container>
      <Row>
        <div className="items">
        <img src={search} alt=""/>
            <h3 className="h3-sections pd--20">Busca</h3>
            <p>Utiliza nuestra plataforma para buscar tu departamento cerca
                de tu universidad o trabajo acorde a tus preferencias y necesidades
            </p>
        </div>
        <div className="items">
        <img src={pin} alt=""/>
            <h3 className="h3-sections pd--20">Encuentra</h3>
            <p>Utiliza nuestra plataforma para buscar tu departamento cerca
                de tu universidad o trabajo acorde a tus preferencias y necesidades
            </p>
        </div>
        <div className="items">
        <img src={backpack} alt=""/>
            <h3 className="h3-sections pd--20">Comienza</h3>
            <p>Utiliza nuestra plataforma para buscar tu departamento cerca
                de tu universidad o trabajo acorde a tus preferencias y necesidades
            </p>
        </div>
        </Row>
        </Container>



    /* <Container>
      <Row>
        <Col className='back' md="4">hola</Col>
        <Col className='back' md="4">hola</Col>
        <Col className='back' md="4">hola</Col>
      </Row>
    </Container> */
  );
}

export default ComoFunciona;


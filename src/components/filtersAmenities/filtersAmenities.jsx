import React, {Component} from "react";
import Amenitie from "./filtersAmenitie";
import Gym from "../../images/filters/gym.jpeg";
import {Container, Row, Col} from "reactstrap";
class Amenities extends Component {
  state = {
    amenidades: [
      {id: 1, titulo: "Gym", url: Gym},
      {id: 7, titulo: "Supermercado", url: Gym},
      {id: 2, titulo: "Farmacia", url: Gym},
      {id: 3, titulo: "Lavanderia", url: Gym},
      {id: 4, titulo: "Cafetería", url: Gym},
      {id: 5, titulo: "Antros y bares", url: Gym},
      // {id: 6, titulo: "Restaurantes", url: Gym},
    ],
  };

  render() {
    return (
      <Container className="text-filter">
        <p className="text-tipo-depa">Amenidades cerca</p>
        <Row xs="6" sm="4" className=" items-depa">
          {this.state.amenidades.map(amenidad => {
            return (
              <Amenitie key={amenidad.id} titulo={amenidad.titulo} url={amenidad.url} />
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Amenities;

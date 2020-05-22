import React, {Component} from "react";
import Indiferente from "../../images/filters/Indiferente.jpg";
import Roomie from "../../images/filters/roomie.jpg";
import Individual from "../../images/filters/individual.jpg";
import {Container, Row, Col} from "reactstrap";

class FiltersTypeRoom extends Component {
  state = {
    indiferente: {id: 1, titulo: "Indiferente", url: Indiferente},
    roomie: {id: 2, titulo: "Roomie", url: Roomie},
    individual: {id: 3, titulo: "Individual", url: Individual},
    colorTextInd: "white",
    colorTextRoomie: "#bcbdbd",
    colorTextIndiv: "#bcbdbd",
  };

  onChangeColor = (colorInd, colorRoomie, colorIndiv) => {
    this.setState({
      colorTextInd: colorInd,
      colorTextRoomie: colorRoomie,
      colorTextIndiv: colorIndiv,
    });
  };

  render() {
    let {colorTextInd, colorTextRoomie, colorTextIndiv} = this.state;

    return (
      <Container style={{padding: "40px"}} className="text-filter">
        <p className="text-tipo-depa">Tipo de departamento</p>

        <div className=" items-depa scrolling-items-depa">
          <button
            onClick={() => this.onChangeColor("white", "#bcbdbd", "#bcbdbd")}
            style={{
              backgroundImage: `url(${this.state.indiferente.url})`,
              color: colorTextInd,
            }}
            className=" item-depa text-images bg-images-depa btn-animated"
          >
            {this.state.indiferente.titulo}
          </button>

          <button
            onClick={() => this.onChangeColor("#bcbdbd", "white", "#bcbdbd")}
            style={{
              backgroundImage: `url(${this.state.roomie.url})`,
              color: colorTextRoomie,
            }}
            className=" item-depa text-images bg-images-depa btn-animated"
          >
            {this.state.roomie.titulo}
          </button>

          <button
            onClick={() => this.onChangeColor("#bcbdbd", "#bcbdbd", "white")}
            style={{
              backgroundImage: `url(${this.state.individual.url})`,
              color: colorTextIndiv,
            }}
            className="item-depa text-images bg-images-depa btn-animated"
          >
            {this.state.individual.titulo}
          </button>
        </div>
      </Container>
    );
  }
}

export default FiltersTypeRoom;

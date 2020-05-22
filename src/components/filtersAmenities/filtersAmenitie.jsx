import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {PureComponent} from "react";

class Amenitie extends PureComponent {
  state = {
    titulo: this.props.titulo,
    url: this.props.url,
  };
  render() {
    return (
      <button
        // onClick={() => this.onChangeColor('white','#bcbdbd', '#bcbdbd')}
        style={{backgroundImage: `url(${this.props.url})`}}
        className=" item-depa-amenitie text-images bg-images-depa btn-animated"
      >
        {this.props.titulo}
      </button>
    );
  }
}
export default Amenitie;

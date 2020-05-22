import React, {Component} from "react";
import {Container, Row} from "reactstrap";
import GoogleMaps from "../components/googleMaps/googleMaps";
// import Filters from "../Coordinates/Filters/Filters";
import FiltersPrice from "../components/filtersPrice/filtersPrice";
import FiltersTypeRoom from "../components/filtersTypeRoom/filtersTypeRoom";
import FiltersAmenities from "../components/filtersAmenities/filtersAmenities";
import SearchBar from "../components/searchBar/searchBar";
import logo from "../images/logo.png";
// import FiltersMap from '../components/Maps-filterMap/filtersMap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Maps() {
  return (
    <React.Fragment>
      <Container fluid className="bg-maps">
        <Row>
          <Link to="/">
            <img alt="" id="img-logo" src={logo} className="logo-maps"></img>
          </Link>
          <div className="input-maps">
            <SearchBar />
          </div>
        </Row>
      </Container>
      <GoogleMaps />
      <div className="container-filters">
        <FiltersPrice />
        <FiltersTypeRoom />
        <FiltersAmenities />
      </div>
    </React.Fragment>
  );
}

export default Maps;

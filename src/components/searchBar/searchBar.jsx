import React from 'react';
// import './searchBar.scss';
import {Container} from 'reactstrap';
// import Maps from '../../pages/Maps';
import {
  Link
} from "react-router-dom";

const SearchBar = () => {
  return (
        <div className="container-input">
        <input id="search-input" type="text" placeholder="Busca tu universidad o empresa" name="search"/>
          <Link className="search-button" to ="/rumi/departamento">
          <i className="icono fa-align-center far fa-paper-plane fa-lg">
          </i>
          </Link>

        </div>
  );
}

export default SearchBar;

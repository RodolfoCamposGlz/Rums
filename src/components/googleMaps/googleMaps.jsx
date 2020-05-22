import React, {useState, useEffect} from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parkData from "./skateboard-parks.json";
import mapStyles from "./mapStyles";
import axios from "axios";
function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [depas, setDepas] = useState([]);

  async function getVivaanuncios() {
    var vivanuncios = [];
    await axios
      .get(process.env.REACT_APP_VIVAANUNCIOS)
      .then(res =>
        res.data.ads.map(depa => {
          // setDepas(depas.concat(depa.price.amount));
          vivanuncios.push([
            depa.price.amount,
            depa.geo.map.latitude,
            depa.geo.map.longitude,
          ]);
          // vivanuncios.push(depa.price.amount);
        })
      )
      .catch(error => console.log(error));
    setDepas(vivanuncios);
  }
  // console.log(depas)
  useEffect(() => {
    getVivaanuncios();
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  //Change Google Maps features

  // const mapOptions = {
  //   fullscreenControl: false,
  //   streetViewControl: false,
  //   mapTypeControl: false,
  //   zoomControlOptions: {
  //       position: google.maps.ControlPosition.TOP_LEFT
  //     },
  // };

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{lat: 19.3, lng: -99.15}}
      defaultOptions={{styles: mapStyles}}
      // options={mapOptions}
    >
      {depas.map(depa => (
        <Marker
          // key={park.properties.PARK_ID}
          position={{
            lat: depa[1],
            lng: depa[2],
          }}
          onClick={() => {
            setSelectedPark(depa);
          }}
          icon={{
            url: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${depa[0]}|FE6256|000000`,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark[1],
            lng: selectedPark[2],
          }}
        >
          <div>
            {/* <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTIO}</p> */}
            <h2>hola </h2>
            <p>jejes </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function AppMap() {
  return (
    <div className="container-map">
      {/* MAP */}
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `100%`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
      {/* FILTERS
      <div className='container-filters'>
        <RangeSlider></RangeSlider>
      </div> */}
    </div>
  );
}

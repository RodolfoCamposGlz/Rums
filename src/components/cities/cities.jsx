import React, { Component } from 'react';
import Ciudad from './city';
import cdmx from '../../images/cdmx.jpg';
import gdl from '../../images/Guadalajara.jpg';
import leon from '../../images/leon.jpg';

class Ciudades extends Component {
    state = { 
        ciudades:[
            {id:1,titulo:'Ciudad de Mexico',url: cdmx},
            {id:2,titulo:'Guadalajara',url: gdl},
            {id:3,titulo:'Leon',url:leon}
        ]
     }
    render() { 
        return (
            <React.Fragment>
                {this.state.ciudades.map(ciudad => {
                    return <Ciudad 
                                    key={ciudad.id}
                                    titulo={ciudad.titulo}
                                    url ={ciudad.url}
                                    />
                })}
            </React.Fragment>
          );
    }
}
 
export default Ciudades;
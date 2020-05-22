import React, { Component } from 'react';
import Univerisidad from './university';
import UNAM from '../../images/Universities/unam.png';
import Anahuac from '../../images/Universities/anahuac.jpg';
import Lasalle from '../../images/Universities/lasalle.jpg';
import UAM from '../../images/Universities/uam.jpg';
import UVM from '../../images/Universities/uvm.jpg';
import Ibero from '../../images/Universities/ibero.jpg';
import IPN from '../../images/Universities/ipn.jpg';
import ITAM from '../../images/Universities/itam.jpg';

class Universidades extends Component {
    state = { 
        universidades:[
            {id:1,titulo:'UNAM.',url: UNAM},
            {id:2,titulo:'Anáhuac.',url: Anahuac},
            {id:3,titulo:'La Salle.',url:Lasalle},
            {id:4,titulo:'UAM.',url:UAM},
            {id:5,titulo:'UVM.',url:UVM},
            {id:6,titulo:'Ibero.',url:Ibero},
            {id:7,titulo:'IPN.',url:IPN},
            {id:8,titulo:'ITAM.',url:ITAM},

        ]
     }
    render() { 
        return (
            <React.Fragment>
                {this.state.universidades.map(universidad => {
                    return <Univerisidad 
                                    key={universidad.id}
                                    titulo={universidad.titulo}
                                    url ={universidad.url}
                                    />
                })}
            </React.Fragment>
          );
    }
}
 
export default Universidades;
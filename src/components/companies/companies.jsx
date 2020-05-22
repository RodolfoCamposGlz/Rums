import React, { Component } from 'react';
import Empresa from './companie';
import Softtek from '../../images/Companies/softtek.jpg';
import KPMG from '../../images/Companies/kpmg.jpg';
import IBM from '../../images/Companies/IBM.gif';
import Microsoft from '../../images/Companies/microsoft.jpg';
import BBVA from '../../images/Companies/BBVA.jpg';
import Deloitte from '../../images/Companies/Deloitte.jpg';
import Accenture from '../../images/Companies/accenture.jpg';
import Colgate from '../../images/Companies/colgate.jpg';

class Empresas extends Component {
    state = { 
        empresas:[
            {id:1,titulo:'Softtek.',url: Softtek},
            {id:2,titulo:'KPMG.',url: KPMG},
            {id:3,titulo:'IBM.',url:IBM},
            {id:4,titulo:'Microsoft.',url:Microsoft},
            {id:5,titulo:'BBVA.',url:BBVA},
            {id:6,titulo:'Deloitte.',url:Deloitte},
            {id:7,titulo:'Accenture.',url:Accenture},
            {id:8,titulo:'Colgate.',url:Colgate},

        ]
     }
    render() { 
        return (
            <React.Fragment>
                {this.state.empresas.map(empresa => {
                    return <Empresa 
                                    key={empresa.id}
                                    titulo={empresa.titulo}
                                    url ={empresa.url}
                                    />
                })}
            </React.Fragment>
          );
    }
}
 
export default Empresas;
import React, { Component} from 'react';
import { Container,Row} from 'reactstrap';
import imgTiempo from '../../images/clock.png';
import soda from '../../images/soft-drink.png';
import gym from '../../images/gym.png';


class InfoSection extends Component {
    state = {  }
    render() { 
        return ( 
<React.Fragment>
        <div className="margin--50 bg-alternate">
            <Container>
               <Row>
                   <div className="items">
                       <img src={imgTiempo} height="180" width="180"></img>
                   </div>
                    <div className="items">
                        <h2 className="h2-sections">No desperdicies tu tiempo.</h2>
                        <p className="font-text">

                         En Rums te ayudamos a ahorrarte tiempo,
                                buscando tu departamento cerca de tu universidad
                               o trabajo en mas de 6 sitios web.
                        </p>
                </div>
               </Row>
            </Container>
        </div>

    <div className="margin--50">
        <Container>
        <Row>
            <div className="items">
                <h2 className="h2-sections">Encuentra tu departamento,
                con las amenidades que necesites.</h2>
                <p className="font-text">

                ¿Quieres que tu departamento este cerca de un gym?
                ¿de un lugar de comida o cafe? nosotros te ayudamos
                a que lo encuentres!.
                </p>
            </div>

            <div className="items">
                <img src={soda} height="180" width="180"></img>
                <img src={gym} height="180" width="180"></img>
            </div>
        </Row>
        </Container>
    </div>
</React.Fragment>
         );
    }
}
 

export default InfoSection;
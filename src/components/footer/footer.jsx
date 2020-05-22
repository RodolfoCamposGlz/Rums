import React, { Component } from 'react';
import { Container} from 'reactstrap';
import twitter from '../../images/Social media/twitter.png';
import facebook from '../../images/Social media/facebook.png';
import instagram from '../../images/Social media/instagram.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="bg-footer">
                <Container className="pd">
                    <h2 style={{color:'white',textAlign:"center"}} >Hola! ayudanos a mejorar nuestra plataforma</h2>
                    <h2 style={{color:'white',textAlign:"center"}}> mandanos tus opiniones,ideas o quejas a nuestras redes sociales</h2>
                    <p>
                    </p>
                        <div className="container-media">
                        <a><img src={twitter} height="50" width="50"></img></a>
                        <a><img src={facebook} height="50" width="50" ></img></a>
                        <a><img src={instagram} height="50" width="50" ></img></a>
                        </div>

                    <p style={{textAlign:'center'}}>
                        Copyright Dev.f 2019
                    </p>
                </Container>
            </footer>
         );
    }
}
 
export default Footer;



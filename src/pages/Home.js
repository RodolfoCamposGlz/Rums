import React from 'react';
import { Container } from 'reactstrap';
import '../sass/main.scss';
import NavBarHome from '../components/navBar/navBar';
import SearchBar from '../components/searchBar/searchBar';
import InfoHowWorks from '../components/infoHowWorks/infoHowWorks';
import Cities from '../components/cities/cities';
import Universities from '../components/universities/universities';
import Companies from '../components/companies/companies';
import InfoSection from '../components/infoSection/infoSection';
import Footer from '../components/footer/footer';

function Home() {
  return (
  <React.Fragment>
    {/* Home-page */}
    <div className='parallax-home'>
    <NavBarHome/>
    <div className="container-search">
      <div className="content">
        <h1>Encuentra tu departamento perfecto</h1>
        <h3>¿Vas a estudiar o trabajar fuera de tu ciudad?</h3>
        <p/>
    <SearchBar/>
    </div>
    </div>
    </div>
    { /* How works*/}
   <h2 className="h2-sections">¿Como funciona?</h2>
    <InfoHowWorks/>

    {/* Cities */}
   <h2 className="h2-sections">Cities Populares</h2>
   <Container>
     <div className="scrolling-items">
    <Cities/>
    </div>
    </Container>

        {/* Universities */}
        <h2 className="h2-sections">Universidades Populares</h2>
    <Container>
        <div className="scrolling-items">
    <Universities/>
        </div>
    </Container>

        {/* Empresas */}
        <h2 className="h2-sections">Empresas Populares</h2>
    <Container>
        <div className="scrolling-items">
    <Companies/>
        </div>
    </Container>

        {/* Info Section */}
      <InfoSection/>
    <div className="container-app">
    <button className="start-button">Comienza ahora!</button>
    </div>

        {/* footer */}
        <Footer/>
  </React.Fragment>
  );
}

export default Home;

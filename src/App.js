import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import TopDeals from './components/TopDeals';
import Categories from './components/categories';
import Footer from './components/header-footer/Footer';
import AboutUs from './components/AboutUs';
import SearchByEmail from './components/SearchByEmail';
import { Element } from 'react-scroll';


class App extends Component {
  render(){
  return (
    <div className="App">

    <Element name="Home">
    <Header/>
    </Element>
    
     <Featured/>
     <VenueInfo/>
     

     <Element name="Categories">
     <Categories/>
     </Element>
     <AboutUs/>
     <TopDeals/>
     <SearchByEmail/>
     <hr/>
     <Footer/>
    </div>
  );
}
}
export default App;

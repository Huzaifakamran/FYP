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
import {Link} from 'react-router-dom';
import { Element } from 'react-scroll';


class Home extends Component {
  render(){
  return (
      
      
    <div>

    <Element name="Home">
    <Header/>
    </Element>
    
     <Featured/>
     <VenueInfo/>
     

     <Element name="Categories">
     <Categories/>
     </Element>
     
     <Element name="AboutUs">
     <AboutUs/>
     </Element>
     
     <TopDeals/>
     <hr/>
     <SearchByEmail/>
     <Footer/>
    </div>
   
  );
}
}
export default Home;

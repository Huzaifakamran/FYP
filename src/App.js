import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import TopDeals from './components/TopDeals';
import Categories from './components/categories';
import Footer from './components/header-footer/Footer';
import { Element } from 'react-scroll';

class App extends Component {
  render(){
  return (
    <div className="App" style={{height: "1500px"}}>

    <Element name="Home">
    <Header/>
    </Element>
    
     <Featured/>
     <VenueInfo/>
     <TopDeals/>

     <Element name="Categories">
     <Categories/>
     </Element>

     <Footer/>
    </div>
  );
}
}
export default App;

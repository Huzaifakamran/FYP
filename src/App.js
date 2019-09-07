import React, { Component } from 'react';
import './resources/styles.css';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route , Redirect} from 'react-router-dom';
import Register from './components/header-footer/Register';
import Privacy from './components/PrivacyPolicy/Privacy';
import Owner from './components/Dashboard/Owner/Owner';
import Admin from './components/Dashboard/Admin/Admin';
import MessageToAdmin from './components/Dashboard/Owner/AdminMessage';

class App extends Component {
  render(){
  return (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/RegisterHall" component={Register}/>
        <Route exact path="/PrivacyPolicy" component={Privacy}/>
        <Route exact path="/OwnerDashboard" component={Owner}/>
        <Route exact path="/AdminDashboard" component={Admin}/>
        <Route exact path="/AdminMessage" component={MessageToAdmin}/>
       
    
        <Redirect to="/404"/>
      </Switch>
    
    </Router>
  );
}
}
export default App;
;
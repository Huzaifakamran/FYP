import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MyButton from '../utills/MyButton';
import '../../resources/bootstrap.min.css';
import Login from './LoginSignUp';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            
            
            <AppBar position="static" style={{
                backgroundColor:  '#2f2f2f' ,
                boxShadow: 'none',
                padding: '10px 0px'

            }}>
                <Toolbar>
                    <img style={{ width: '90px', height: '90px' }} src={require('../../resources/images/final.png')} />

                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Venue Club</div>
                        <div className="header_logo_title">Design Your Perfect Event</div>
                    </div>


                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>HOME</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>CATEGORIES</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>ABOUT US</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>PRIVACY POLICY</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} data-toggle="modal" data-target="#exampleModalCenter">LOGIN / SIGNUP</button>
                  <Link to="/AfterLogin">  <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>REGISTER HALL</button> </Link>

                    <Login/>
                    

                </Toolbar>
            </AppBar>
            
        );
    }
}

export default Header;
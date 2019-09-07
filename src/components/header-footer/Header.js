import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MyButton from '../utills/MyButton';
import '../../resources/bootstrap.min.css';
import Login from './LoginSignUp';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }
    scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar position="fixed" style={{
                backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'

            }}>
                <Toolbar>
                    <img style={{ width: '90px', height: '90px' }} src={require('../../resources/images/final.png')} />

                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Venue Club</div>
                        <div className="header_logo_title">Design Your Perfect Event</div>
                    </div>

                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} onClick={()=>this.scrollToElement('Home')}>HOME</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} onClick={()=>this.scrollToElement('Categories')}>CATEGORIES</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} onClick={()=>this.scrollToElement('AboutUs')}>ABOUT US</button>
                    <Link to='/PrivacyPolicy'>   <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>PRIVACY POLICY</button></Link>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} data-toggle="modal" data-target="#exampleModalCenter">LOGIN / SIGNUP</button>
                   <Link to="/OwnerDashboard"> <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>Owner</button></Link>
                   <Link to="/AdminDashboard"><button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} data-toggle="modal" data-target="#exampleModalCenter">Admin</button></Link>
                
                    <Login/>
                    

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MyButton from '../utills/MyButton';
import SideDrawer from './SideDrawer';
import '../../resources/bootstrap.min.css';
import Login from './LoginSignUp';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
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

                    {/* <IconButton aria-label="Menu" color="inherit" onClick={()=> this.toggleDrawer(true)}>
                        <MenuIcon/>
        </IconButton>

                    <SideDrawer open={this.state.drawerOpen} onClose={(value)=> this.toggleDrawer(value)} />
                    */}

                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>HOME</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>CATEGORIES</button>
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }}>ABOUT US</button>

                   
                    <button style={{ background: 'none', border: 'none', color: '#ffffff', margin: '10px' }} data-toggle="modal" data-target="#exampleModalCenter">LOGIN</button>
                     <Login/>
                    

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
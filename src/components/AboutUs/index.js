import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class AboutUS extends Component {
    render() {
        return (
            <div className="bck_black">
           
            <div className="pricing_section">
              <h2 style={{color:'white'}}>OUR TEAM</h2>
            <hr className="center_wrapper" style={{border:'solid'}}/>
            <br/>
            <div className="container mt-4">
                <div className="row ">
                
                    <Zoom duration={800} delay={500}>
                    
                <div className="cont">
                <img className="cat_img" src={require('../../resources/images/AboutUs/huzaifa.jpg')} alt="Notebook" style={{width:'250px',height:'300px', marginLeft:'5px'}}/>
                <div className="content_cat">
                <p style={{textAlign:'center'}}>Name:Huzaifa Kamran <br/>Desc: UI Designer<br/>Age:21</p>
                  </div>
              </div>
              </Zoom>

              <Zoom duration={800}>

              <div className="cont">
                <img className="cat_img" src={require('../../resources/images/AboutUs/majid.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
                <div className="content_cat">
                <p style={{textAlign:'center'}}>Name:Huzaifa Kamran</p>
                  </div>
              </div>
              </Zoom>

              <Zoom duration={800}>
              <div className="cont">
                <img className="cat_img" src={require('../../resources/images/slide_two.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
                <div className="content_cat">
                <p style={{textAlign:'center'}}>Name:Huzaifa Kamran</p>
                  </div>
              </div>
              </Zoom>

              <Zoom duration={800} delay={500}>
              
              
              <div className="cont">
                <img className="cat_img" src={require('../../resources/images/slide_two.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
                <div className="content_cat">
                <p style={{textAlign:'center'}}>Name:Huzaifa Kamran</p>
                  </div>
              </div>
              </Zoom>
              </div>

                </div>
            </div>
           
            </div>

        );
    }
}

export default AboutUS;
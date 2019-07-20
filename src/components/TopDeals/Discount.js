import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utills/MyButton';
import '../../resources/bootstrap.min.css';
import Flip from 'react-reveal/Flip';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-md-5" style={{width: '540px'}}>
                    <div className="row no-gutters">
                      <div className="col-md-7" >
                      <Flip>
                      
                        <img style={{height:'100%',width:'100%'}} src={require('../../resources/images/slide_two.jpg')} className="card-img" alt="..."/>
                        </Flip>
                        </div>
                      <div className="col-md-5">
                        <div className="card-body" style={{textAlign:'center'}}>
                          <h5 className="card-title">ABC Lawn</h5>
                          <h5 className="card-title">50% OFF</h5>
                          <p className="card-text">Minimum Dining For 500 persons</p>
                          <p className="card-text"><small className="text-muted">Near Gulshan 13D, Karachi</small></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 " style={{width: '540px',marginLeft:'120px'}}>
                    <div className="row no-gutters">
                      <div className="col-md-7" >
                      <Flip>
                      
                      <img style={{height:'100%',width:'100%'}} src={require('../../resources/images/slide_two.jpg')} className="card-img" alt="..."/>
                      </Flip>
                       </div>
                      <div className="col-md-5">
                        <div className="card-body" style={{textAlign:'center'}}>
                          <h5 className="card-title">ABC Lawn</h5>
                          <h5 className="card-title">50% OFF</h5>
                          <p className="card-text">Minimum Dining For 500 persons</p>
                          <p className="card-text"><small className="text-muted">Near Gulshan 13D, Karachi</small></p>
                        </div>
                      </div>
                    </div>
                  </div>

                    </div>
                </div>

                <div className="container my-4">
                    <div className="row">
                    <div className="col-md-5" style={{width: '540px'}}>
                    <div className="row no-gutters">
                      <div className="col-md-7" >
                      <Flip>
                      
                      <img style={{height:'100%',width:'100%'}} src={require('../../resources/images/slide_two.jpg')} className="card-img" alt="..."/>
                      </Flip>
                         </div>
                      <div className="col-md-5">
                        <div className="card-body" style={{textAlign:'center'}}>
                          <h5 className="card-title">ABC Lawn</h5>
                          <h5 className="card-title">50% OFF</h5>
                          <p className="card-text">Minimum Dining For 500 persons</p>
                          <p className="card-text"><small className="text-muted">Near Gulshan 13D, Karachi</small></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5" style={{width: '540px',marginLeft:'120px'}}>
                  <div className="row no-gutters">
                    <div className="col-md-7" >
                    <Flip>
                      
                    <img style={{height:'100%',width:'100%'}} src={require('../../resources/images/slide_two.jpg')} className="card-img" alt="..."/>
                    </Flip>
                      </div>
                    <div className="col-md-5">
                      <div className="card-body" style={{textAlign:'center'}}>
                        <h5 className="card-title">ABC Lawn</h5>
                        <h5 className="card-title">50% OFF</h5>
                        <p className="card-text">Minimum Dining For 500 persons</p>
                        <p className="card-text"><small className="text-muted">Near Gulshan 13D, Karachi</small></p>
                      </div>
                    </div>
                  </div>
                </div>

                    </div>
                </div>


           

            

          

         
                
            </div>
        );
    }
}

export default Discount;
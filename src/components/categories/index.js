import React, { Component } from 'react';
import MyButton from '../utills/MyButton';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import '../../resources/bootstrap.min.css';
class Categories extends Component {
    render() {
        return (
            
            <div className="center_wrapper pricing_section">
              <h2 className="font_righteous" style={{color:'black'}}>Categories</h2>
            
            <br/>
            <div className="container mt-4">
                <div className="row ">
                    
                <div className="col-sm-4">
                <Flip>
                <img className="cat_img" src={require('../../resources/images/slide_two.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
                </Flip>
                 <div className="content">
                  <p style={{textAlign:'center'}}>Heading</p>
                  {/*<p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>*/}
                </div>
              </div>

              <div className="col-sm-4">

              <Flip>
              <img className="cat_img" src={require('../../resources/images/slide_two.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
              </Flip>

                <div className="content">
                  <p style={{textAlign:'center'}}>Heading</p>
                  {/*<p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>*/}
                </div>
              </div>

              <div className="col-sm-4">

               <Flip>
              <img className="cat_img" src={require('../../resources/images/slide_two.jpg')} alt="Notebook" style={{width:'250px',height:'300px'}}/>
              </Flip>
              
                <div className="content">
                  <p style={{textAlign:'center'}}>Heading</p>
                  {/*<p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>*/}
                </div>
              </div>

              </div>

                </div>
            </div>
           
          
            
            
        );
    }
}

export default Categories;
import React, { Component } from 'react';
import '../../resources/bootstrap.min.css';

class SearchByEmail extends Component {
    render() {
        return (
            
                <div className="center_wrapper  pricing_section">
                    <h2 style={{color:'black'}} className="font_righteous">Stay up to date !</h2>
                    <div className="div6">   
                    <input className="col-sm-8 i1 my-5"  placeholder="Subscribe to get update Now!" /><button className="btn btn-success b1" >Subscribe</button>
                    </div>
                </div>
                
        );
    }
}

export default SearchByEmail;
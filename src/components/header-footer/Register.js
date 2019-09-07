import React, { Component } from 'react';
import '../../resources/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../header-footer/FixedHeader';
import Footer from '../header-footer/Footer';
class Register extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="center_wrapper" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h2 style={{textAlign:'center'}}>REGISTRATION FORM</h2>

          <div className="form-group">
            <label for="inputName">Hall name</label>
            <input type="text" className="form-control" id="inputName" placeholder="ABC Lawn" />
          </div>

          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>

          <div className="form-row">
            <div className="col">
              <label for="inputCapacity">Capacity</label>
              <input type="number" className="form-control" placeholder="500" />
            </div>

            <div className="col">
              <label for="inputPrice">Price</label>
              <input type="number" className="form-control" placeholder="Rs." />
            </div>
          </div>

          <br />

          <div className="form-group">
            <label for="exampleFormControlFile1">Upload hall images</label>
            <input type="file" multiple className="form-control-file" id="exampleFormControlFile1" />
          </div>

          <br />
          
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-success">Register</button>
          </div>

        </div>

        <Footer />
      </div>


    );
  }
}

export default Register;
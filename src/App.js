import React from 'react';
import './App.css';
import me from './assets/images/mukesh.jpg';
import { MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
class App extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="text-center">
            <img className="rounded-circle" height="200" src={me} />
            <h2 className="title-name">Mukesh Kalaga</h2>
            <p className="text-white text-uppercase" style={{fontSize:14}}> - Fullstack Developer</p>
          </div>
          <a className="hire-me-btn rounded-pill" href="tel:7661959689">Hire Me</a>
        </div>
        {/* <div className="p-3 text-center">
          <MDBCard className="" style={{marginTop:-40,maxWidth:700,display:"inline-block",width:"100%",height:300}}>
            <MDBCardBody>
              <h4 className="recent-work-title">Recent Work</h4>
            </MDBCardBody>
          </MDBCard>
        </div> */}
      </>
    );
  }
}

export default App;

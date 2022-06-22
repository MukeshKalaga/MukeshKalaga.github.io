import React from 'react';
import './App.css';
import me from './assets/images/mukesh.jpg';
import { MDBBtn, MDBCard, MDBCardBody, MDBProgress } from 'mdbreact';
import axios from 'axios';
class App extends React.Component {
  state = {
    repoLoad: true,
    repos: [

    ]
  }
  componentDidMount() {
    this.fetchRepos()
  }
  async fetchRepos() {
    var data = await axios.get("https://api.github.com/users/MukeshKalaga/repos")
    this.setState({repos:data.data,repoLoad:false})
  }
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
        <div className="p-3 text-center">
          <MDBCard className="" style={{marginTop:-40,maxWidth:700,display:"inline-block",width:"100%"}}>
            <MDBCardBody>
              <h4 className="recent-work-title">My Work</h4>
              <div className='recent-work-container'>
                <div className={'text-center'+(!this.state.repoLoad?" d-none":"")}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                {
                  this.state.repos.map((repo) => <><h2><a href={repo.html_url}>{repo.name}</a></h2><p>{repo.description}</p><hr/></>)
                }
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </>
    );
  }
}

export default App;

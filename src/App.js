import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import './index.css';
import MainContainer from './containers/MainContainer'
import AboutContainer from './containers/AboutContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import BlogContainer from './containers/BlogContainer.js'
import ContactContainer from './containers/ContactContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false
    }
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <MainContainer 
          title="main"
          dark={true}
          id="main"
        />
        <AboutContainer 
          title="about"
          dark={true}
          id="about"
        />
        <ProjectsContainer 
          title="projects"
          dark={true}
          id="projects"        
        />
        <BlogContainer 
          title="blog"
          dark={true}
          id="blog"
        />
        <ContactContainer 
          title="contact"
          dark={true}
          id="contact"
        />
      </>
    )
  }
}

export default App
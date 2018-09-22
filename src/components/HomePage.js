import React, { Component } from 'react';
import JumboHome from './jumbotron-home/JumboHome'
import Navbar from './navbar/Navbar'
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler, 300);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler() {
    const offset = window.innerWidth > 600 ? 200 : 30;

    if (window.scrollY > offset) {
      this.setState({
        scrolled: true
      });
    } else {
      this.setState({
        scrolled: false
      });
    }
  }

  render() {
    const { scrolled } = this.state;
    return (
      <div className="Home">
        <div className={`home-nav ${scrolled ? "active" : ""}`}>
          <Navbar />
        </div>
        <JumboHome />
        <div style={{ height: "100em" }} />
      </div>
    );
  }
}

export default HomePage;

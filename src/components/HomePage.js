import React, { Component } from 'react'
import JumboHome from './jumbotron-home/JumboHome'
import Navbar from './navbar/Navbar'
import Showcase from './showcase/showcase'
import './HomePage.css'
import Contributors from './contributors/contributors';

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
        <Navbar active={scrolled}/>
        <JumboHome />
        <h2 className='section-title center-align'>Utilização</h2>
        <Showcase />
        <h2 className='section-title center-align'>Contribuidores</h2>
        <Contributors />
        <div style={{ height: "10em" }} />
      </div>
    );
  }
}

export default HomePage;

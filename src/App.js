import React, { Component } from 'react';

//Components
import Header from './components/headerComponent/header';
import Gallery from './components/galleryComponent/gallery';
import Bio from './components/bioComponent/bio';
import Connect from './components/connectComponent/connect';
import Footer from './components/footerComponent/footer';

//Styles
import './Assets/css/scss/styles.min.css';

class App extends Component {
  render() {
    return (
      <div className="App main" id="js-main">
 
        <Header />

        <Gallery />

        <Bio />

        <Connect />

        <Footer />

      </div>
    );
  }
}

export default App;

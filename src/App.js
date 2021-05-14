import React from 'react';
import {Helmet} from "react-helmet";

// BOOTSTRAP CSS
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/vendors/linericon/style.css';
import './assets/vendors/owl-carousel/owl.carousel.min.css';
import './assets/vendors/lightbox/simpleLightbox.css';
import './assets/vendors/nice-select/css/nice-select.css';
import './assets/vendors/animate-css/animate.css';
import './assets/vendors/flaticon/flaticon.css';

// MAIN CSS
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Recommends from './components/Recommends';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Banner />
      <Welcome />
      <Projects />
      <Recommends />
      <Contact />
      <Helmet>
        <script type="text/babel" src="./assets/js/jquery-3.2.1.min.js"></script>
        <script type="text/babel" src="./assets/js/custom.js"></script>
        <script type="text/babel" src="./assets/js/popper.js"></script>
        <script type="text/babel" src="./assets/js/bootstrap.min.js"></script>
        <script type="text/babel" src="./assets/vendors/lightbox/simpleLightbox.min.js"></script>
        <script type="text/babel" src="./assets/js/stellar.js"></script>
        <script type="text/babel" src="./assets/vendors/nice-select/js/jquery.nice-select.min.js"></script>
        <script type="text/babel" src="./assets/vendors/isotope/imagesloaded.pkgd.min.js"></script>
        <script type="text/babel" src="./assets/vendors/isotope/isotope-min.js"></script>
        <script type="text/babel" src="./assets/vendors/owl-carousel/owl.carousel.min.js"></script>
        <script type="text/babel" src="./assets/js/jquery.ajaxchimp.min.js"></script>
        <script type="text/babel" src="./assets/vendors/counter-up/jquery.waypoints.min.js"></script>
        <script type="text/babel" src="./assets/vendors/counter-up/jquery.counterup.min.js"></script>
        <script type="text/babel" src="./assets/js/mail-script.js"></script>
        {/* <!--gmaps Js-->*/}
        <script type="text/babel" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
        <script type="text/babel" src="./assets/js/gmaps.min.js"></script>
        <script type="text/babel" src="./assets/js/theme.js"></script>
      </Helmet>
    </div>
  );
}

export default App;

import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Navbar = () => {

  var myNav = document.getElementById('navbar');
  window.onscroll = function () {

      if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
      }
      else {
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
  };


  return (

    <header className=".header_area">
      <div className="main_menu" id="mainNav">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
          <div className="container box_1620">
            {/* Brand and toggle get grouped for better mobile display */}
            <a className="navbar-brand logo_h" href="index.html"><img src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <Link to="/">
                  <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                </Link>
                <li className="nav-item"><a className="nav-link" href="#welcome_area">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#project_area">Projects</a></li>
{/*                <li className="nav-item submenu dropdown">
                  <a href="https://googl.com" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Project Details</a></li>
                    <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a href="https://google.com" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                  </ul>
                </li>*/}
                <li className="nav-item"><a className="nav-link" href="https://silvercyberblog.pythonanywhere.com">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact_area">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

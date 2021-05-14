import React from 'react';
import MyPic from '../assets/img/banner/home-left-1.png';

const Banner = () => {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="home_left_img">
                <img src={MyPic} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_content">
                <h5>This is me</h5>
                <h2>Rajat Saxena</h2>
                <p id="des-1"><i className="lnr lnr-bug"></i> &nbsp;&nbsp;&nbsp;&nbsp; Full-stack Developer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-pie-chart"></i> &nbsp;&nbsp;&nbsp;&nbsp; Graphic Designer &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-code"></i> &nbsp;&nbsp;&nbsp;&nbsp; Software Enthusiast</p>
                <p id="des-2"><i className="lnr lnr-star"></i> &nbsp;&nbsp;&nbsp;&nbsp; Founder of CODE &nbsp;&nbsp;&nbsp;&nbsp; <i className="lnr lnr-briefcase"></i> &nbsp;&nbsp;&nbsp;&nbsp; Joint-Secretory of FAH</p>
                <a className="banner_btn" href="https://google.com">Discover Now</a>
                <div className="upper-social">
                  <ul className="list">
                    <li><a href="https://www.facebook.com/rajat.saxena.90410/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://google.com"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/rajat-saxena-54509a15b/"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/Rajat26599/"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.behance.net/rajatsaxena3"><i className="fa fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

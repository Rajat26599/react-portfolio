import React from 'react';

const Footer = () => {

  return (
    <div>
    <section className="contact_area p_120" id="contact_area">
        <div className="container">
        {/* // <div id="mapBox" className="mapBox"
            //     data-lat="40.701083"
            //     data-lon="-74.1522848"
            //     data-zoom="13"
            //     data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
            //     data-mlat="40.701083"
            //     data-mlon="-74.1522848">
            // </div> */}
            <div className="row">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-home"></i>
                            <h6>Uttar Pradesh, India</h6>
                            <p>Shikohabad-283135</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-phone-handset"></i>
                            <h6><a href="/#">Not Provided</a></h6>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-envelope"></i>
                            <h6><a href="/#">saxena1975sanjeev@gmail.com</a></h6>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn submit_btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="f_widget social_widget">
              <ul className="list">
                <li><a href="https://www.facebook.com/rajat.saxena.90410/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://google.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rajat-saxena-54509a15b/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Rajat26599/"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.behance.net/rajatsaxena3"><i className="fa fa-behance"></i></a></li>
              </ul>
            </div>
            <div className="copy_right_text">
              <p>
                <br/>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://google.com" target="_blank" rel="noreferrer">Rajat Saxena</a>
              </p>
            </div>
        </div>
    </section>

    {/*<footer className="footer_area p_120">
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
              <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://google.com" target="_blank" rel="noreferrer">Rajat Saxena</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget news_widget">
              <div className="f_title">
                <h3>Newsletter</h3>
              </div>
              <p>Stay updated with our latest trends</p>
              <div id="mc_embed_signup">
                <form target="_blank" rel="noreferrer" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                  <div className="input-group d-flex flex-row">
                    <input name="EMAIL" placeholder="Enter email address" onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder="Email Address "} required="" type="email" />
                    <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                  </div>
                  <div className="mt-10 info"></div>
                </form>
              </div>
            </aside>
          </div>
          <div className="col-lg-2">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <ul className="list">
                <li><a href="https://www.facebook.com/rajat.saxena.90410/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://google.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rajat-saxena-54509a15b/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Rajat26599/"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.behance.net/rajatsaxena3"><i className="fa fa-behance"></i></a></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>*/}
    </div>
  );
};

export default Footer;

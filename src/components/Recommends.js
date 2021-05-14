import React from 'react';

const Recommends = () => {
  return (
    <section className="testimonials_area p_120">
      <div className="container">
        <div className="main_title">
          <h2>Recommendations</h2>
          <p>I love when people like my work. A positive feedback adds positive energy to your work and boosts your confidence.</p>
        </div>
        <div className="testi_inner">
          {/* <div className="testi_slider owl-carousel"> */}
          <div className="testi_slider row">
            <div className="item col-4">
              <div className="testi_item">
                <p>
                  Rajat is a passionate and dedicated WordPress developer. The current KhushiSeYoga website has been designed by him and he was able to understand what was needed as a yoga startup. He does his homework to research the best designs, themes, and the structure of the pages. He is proactive and always ready for new tasks whichever is required by Team.
                </p>
                <h4>Sunder Bishnoi</h4>
                <h6>Founder #KhushiSeYoga</h6>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star-half-o"></i></a>
              </div>
            </div>
            <div className="item col-4">
              <div className="testi_item">
                <p>
                  Rajat is a great partner to work with. Being a fast learner helped him understand the market fit and quickly choose the right path to success. He has an amazing quality of being patient which helped us during the times of work pressure.
                  <br/><br/>
                  Thanks a lot, Rajat! You made the internship journey relatively smooth for me.
                </p>
                <h4>Kirtee Jamdade</h4>
                <h6>Vice Precident at Robotaract Club, WCE</h6>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star-half-o"></i></a>
              </div>
            </div>
            <div className="item col-4">
              <div className="testi_item">
                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                <h4>Fanny Spencer</h4>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star"></i></a>
                <a href="https://google.com"><i className="fa fa-star-half-o"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;

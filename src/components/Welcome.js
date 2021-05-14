import React from 'react';

const Welcome = () => {
    return (
      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>About Myself</h4>
                <p>
                  I have been working on my profile as a Web Developer lately. I’m eager to seek opportunities in softwares too.
                  I’m skilled in Full-stack Web Development, Python, Angular, React, Java, C, Wordpress, IoT, databases and more.
                  And I’m also an experienced Graphic Designer.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-star"></i>
                      <h4>5 <span id="fiveStars">Stars</span></h4>
                      <p>On Hackerrank</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-book"></i>
                      <h4>10+</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-license"></i>
                      <h4>15+</h4>
                      <p>Certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tools_expert">
                <h3>Tools Expertness</h3>
                <div className="skill_main">
              <div className="skill_item">
                <h4>Django / Python <span className="counter">85</span>%</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill_item">
                <h4>React / Angular <span className="counter">90</span>%</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill_item">
                <h4>Core Java <span className="counter">70</span>%</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill_item">
                <h4>HTML5 / CSS3 <span className="counter">95</span>%</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="skill_item">
                <h4>Photoshop <span className="counter">75</span>%</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Welcome;
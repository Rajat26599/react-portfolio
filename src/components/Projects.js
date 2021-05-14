import React from 'react';
import project1 from "../assets/img/projects/projects-1.jpg";
import project2 from "../assets/img/projects/projects-2.jpg";
import project3 from "../assets/img/projects/projects-3.jpg";
import project4 from "../assets/img/projects/projects-4.jpg";
import project5 from "../assets/img/projects/projects-5.jpg";
import project6 from "../assets/img/projects/projects-6.jpg";

const Projects = () => {
  return (
    <section className="projects_area p_120">
      <div className="container">
        <div className="main_title">
      <h2>Our Recent Completed Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
    </div>
        <div className="projects_fillter">
      <ul className="filter list">
        <li className="active" data-filter="*"><a href="https://google.com">All Categories</a></li>
        <li data-filter=".brand"><a href="https://google.com">Branding</a></li>
        <li data-filter=".work"><a href="https://google.com">Creative Work </a></li>
        <li data-filter=".web"><a href="https://google.com">Web Design</a></li>
      </ul>
    </div>
    <div className="projects_inner row">
      <div className="col-lg-4 col-sm-6 brand web">
        <div className="projects_item">
          <img className="img-fluid" src={project1} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work">
        <div className="projects_item">
          <img className="img-fluid" src={project2} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 work">
        <div className="projects_item">
          <img className="img-fluid" src={project3} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand web">
        <div className="projects_item">
          <img className="img-fluid" src={project4} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work">
        <div className="projects_item">
          <img className="img-fluid" src={project5} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work web">
        <div className="projects_item">
          <img className="img-fluid" src={project6} alt="" />
          <div className="projects_text">
            <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Projects;

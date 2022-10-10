import React from 'react';
import project1 from "../assets/img/projects/projects-1.jpg";
import project2 from "../assets/img/projects/projects-2.jpg";
import project3 from "../assets/img/projects/projects-3.jpg";
import project4 from "../assets/img/projects/projects-4.jpg";
import project5 from "../assets/img/projects/projects-5.jpg";
import project6 from "../assets/img/projects/projects-6.jpg";

const Projects = () => {
  return (
    <section className="projects_area p_120" id="project_area">
      <div className="container">
        <div className="main_title">
      <h2>Recent Projects</h2>
      <p>The best way to learn a technology is to create projects in it. I've taken it very sincerely.</p>
    </div>
    {/*    <div className="projects_fillter">
      <ul className="filter list">
        <li className="active" data-filter="*"><a href="https://google.com">All Categories</a></li>
        <li data-filter=".brand"><a href="/#">Branding</a></li>
        <li data-filter=".work"><a href="/#">Creative Work </a></li>
        <li data-filter=".web"><a href="/#">Web Design</a></li>
      </ul>
    </div>*/}
    <div className="projects_inner row">
      <div className="col-lg-4 col-sm-6 brand web">
        <div className="projects_item">
          <img className="img-fluid" src={project1} alt="" />
          <div className="projects_text">
            <a href="https://github.com/Rajat26599/HealthForever" target="_blank" rel="noreferrer"><h4>HealthForever</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work">
        <div className="projects_item">
          <img className="img-fluid" src={project2} alt="" />
          <div className="projects_text">
            <a href="https://silvercyberblog.pythonanywhere.com" target="_blank" rel="noreferrer"><h4>SilverCyber Blog</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 work">
        <div className="projects_item">
          <img className="img-fluid" src={project3} alt="" />
          <div className="projects_text">
            <a href="https://khushiseyoga.com" target="_blank" rel="noreferrer"><h4>Yoga Website</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand web">
        <div className="projects_item">
          <img className="img-fluid" src={project4} alt="" />
          <div className="projects_text">
            <a href="https://drive.google.com/drive/folders/1VRwpv21r_FM3HZt0udXiKneiZ5BJeLEc?usp=sharing" target="_blank" rel="noreferrer"><h4>Water Level Indicator</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work">
        <div className="projects_item">
          <img className="img-fluid" src={project5} alt="" />
          <div className="projects_text">
            <a 
              // href="https://github.com/Rajat26599/coronaTracker2.0" 
              href="https://corona-track-status.netlify.app"
              target="_blank" rel="noreferrer"><h4>Corona Tracker 2.0</h4></a>
            <p>Client Project</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 brand work web">
        <div className="projects_item">
          <img className="img-fluid" src={project6} alt="" />
          <div className="projects_text">
            <a href="https://getsetnote.netlify.app" target="blank" rel="noreferrer"><h4>Get-Set-Note</h4></a>
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

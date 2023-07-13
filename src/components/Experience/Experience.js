import React from 'react';
import './Experience.css';
import infosysLogo from './img/infosysLogo.png';
import tcsLogo from './img/tcsLogo.png';
import codeLogo from './img/codeLogo.png';
import ksyLogo from './img/ksyLogo.png';
import cetpaLogo from './img/cetpaLogo.png';

const wordExperiences = [
  {
    logo: {url: infosysLogo, width: 80},
    alt: "Infosys logo",
    profileName: "Associate Business Analyst (UI Developer)",
    companyName: "Infosys",
    duration: "Nov-2022 to Present" 
  },
  {
    logo: {url: tcsLogo, width: 100},
    alt: "TCS logo",
    profileName: "Assistant System Engineer-Trainee",
    companyName: "TCS",
    duration: "Jul-2021 to Nov-2022" 
  }
]

const otherExperiences = [
  {
    logo: {url: codeLogo, width: 60},
    alt: "CODE logo",
    profileName: "Founder",
    companyName: "CODE (Club Of DEvelopers)",
    duration: "Oct-2020 to Present" 
  },
  {
    logo: {url: ksyLogo, width: 100},
    alt: "KSY logo",
    profileName: "Web-Developer Intern",
    companyName: "Khushi Se Yoga, Navi Mumbai",
    duration: "Apr-2020 to Jun-2020" 
  },
  {
    logo: {url: cetpaLogo, width: 100},
    alt: "CETPA logo",
    profileName: "Python Programmer Trainee",
    companyName: "Cetpa InfoTech Pvt Ltd, Lucknow",
    duration: "Apr-2019 to May-2019" 
  }
]

const Experience = () => {
  return (
    <section className="experience_area p_120" id="experience_area">
      <div className="container">
        <div className='experience_text'>
          <h4>Experience</h4>  

          {
            wordExperiences.map(item => (              
              <div className='row experienceItem'>
                <div className='col-md-1 col-sm-3' >
                  <img src={item.logo.url} alt={item.alt} width={item.logo.width}></img>  
                </div>
                <div className='col-md-11 col-sm-9 profile'>
                  <p className='profile_name'>
                    {item.profileName} 
                    <span className='at'>at</span> 
                    <span className='companyName'>{item.companyName}</span>
                  </p>
                  <h6>{item.duration}</h6>
                </div>
              </div> 
            ))
          }

          {
            otherExperiences.map(item => (              
              <div className='row experienceItem'>
                <div className='col-md-1 col-sm-3' >
                  <img src={item.logo.url} alt={item.alt} width={item.logo.width}></img>  
                </div>
                <div className='col-md-11 col-sm-9 profile'>
                  <p className='profile_name'>
                    {item.profileName} 
                    <span className='at'>at</span>
                    <span className='companyName'>{item.companyName}</span>
                  </p>
                  <h6>{item.duration}</h6>
                </div>
              </div> 
            ))
          }    
        </div>

      </div>
    </section>
  );
};

export default Experience;

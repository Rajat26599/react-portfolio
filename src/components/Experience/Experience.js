import React from 'react';
import './Experience.css';
import tcsLogo from './img/tcsLogo.png';
import codeLogo from './img/codeLogo.png';
import ksyLogo from './img/ksyLogo.png';
import cetpaLogo from './img/cetpaLogo.png';


const Experience = () => {
  return (
    <section className="experience_area p_120" id="experience_area">
      <div className="container">
        <div className='experience_text'>
          <h4>Experience</h4>  
          
          <div className='row experienceItem'>
            <div className='col-md-1 col-sm-3' >
              <img src={tcsLogo} alt='tcsLogo' width={100}></img>  
            </div>
            <div className='col-md-11 col-sm-9 profile' style={{marginTop:20}}>
              <p className='profile_name'>Assistant System Engineer-Trainee at <span className='companyName'>TCS</span></p>
              <h6>Jul-2021 to Present</h6>
            </div>
          </div>     
          
          <div className='row experienceItem'>
            <div className='col-md-1 col-sm-3' >
              <img src={codeLogo} alt='codeLogo' width={60} style={{marginLeft:20}}></img>  
            </div>
            <div className='col-md-11 col-sm-9 profile'>
              <p className='profile_name'>Founder of <span className='companyName'>CODE (Club Of DEvelopers)</span></p>
              <h6>Oct-2020 to Present</h6>
            </div>
          </div>  
          
          <div className='row experienceItem'>
            <div className='col-md-1 col-sm-3' >
              <img src={ksyLogo} alt='ksyLogo' width={100}></img>  
            </div>
            <div className='col-md-11 col-sm-9 profile' style={{marginTop:20}}>
              <p className='profile_name'>Web-Developer Intern at <span className='companyName'>Khushi Se Yoga, Navi Mumbai</span></p>
              <h6>Apr-2020 to Jun-2020</h6>
            </div>
          </div>  

          <div className='row experienceItem'>
            <div className='col-md-1 col-sm-3' >
              <img src={cetpaLogo} alt='cetpaLogo' width={100}></img>  
            </div>
            <div className='col-md-11 col-sm-9 profile' style={{marginTop:20}}>
              <p className='profile_name'>Python Programmer Trainee at <span className='companyName'>Cetpa InfoTech Pvt Ltd, Lucknow</span></p>
              <h6>Apr-2019 to May-2019</h6>
            </div>
          </div>        
        </div>

      </div>
    </section>
  );
};

export default Experience;

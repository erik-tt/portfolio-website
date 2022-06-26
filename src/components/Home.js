import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



import cvpic from '../pictures/IMG_0041.jpg';

const Home = () => {
  
  return (
    <>
    <NavBar/>
    <div className="top-section" id="home">
        <h1 className="top-header">Erik Tveraaen Torvbråten</h1> 
    </div>


      <div className="intro" >
        <h2 className='header' id="AboutMe">Who am I?</h2>
        <img src={cvpic} alt="Logo" className="cvpic"/>
        <p className="introParagraph">I am 22 years old. Currently I am on my third year of a 
          MSc degree in computer science at the Norwegian University of Science and Technology NTNU with a major in software development.
          I have a strong interest in technology and innovation and how we can take advantage of new technologies in companies and in the society.
          I started programming in 2020 and I really enjoy developing my CS skills and learning new concepts.
          I am also interested in finance and economics, and I have always had a strong interest in social economics.
          </p>
        
        <p className='introParagraph'>
          I am an outgoing person who loves to work with people. My curiosity drives me, and I love learning new things. On my freetime I like to exercise, be with friends, and work on
          small projects I think is interesting, like creating this website.
        </p>
      </div>

       {/*boat picture*/}
       <div className="transition" id='Experience'>
        <h2 className='top-header'>My Experience</h2>
    </div>

      <div className='my-experience'>
        
        <SchoolIcon className='icon' style={{ color: 'white' }} />
        <h2 className='edu-header'>Education</h2>
        
        <div className='school'>
          <h3>- Completed three years of a MSc degree in Computer Science at NTNU</h3>
          <h3>- Asker upper secondary school, graduated in 2019</h3>
        </div>

        <WorkIcon className='icon' style={{ color: 'white' }}/>
        <h2 className='work-header'>Work</h2>

        <div className='work'>
          <h3>- Summer sales staff at IKEA, summer of 2021 and 2022</h3>
          <h3>- Squad leader in the norwegian air force during my initial service, 2019 - 2020</h3>
        </div>

        <h2 className='voluntary-work-header'>Voluntary Work</h2>

        <div className='voluntary-work'>
          <h3>- Abakus, finance and banking committee, 2022 - </h3>
          <h3>- Engineers Without Borders, August 2021 - May 2022</h3>
      </div>
      </div>

     {/*the black and white piocture*/}
      <div className="first-transition" id="Skills">
        <h1 className="top-header">So what have I learned?</h1> 
    </div>

    {/*where I write about what my education and work has tought me*/}
    <div className='learned'>
      <h3>Computer Science</h3>
      <p>
      Throughout my studies I have learned how to approach difficult problems. 
        I have completed courses in mathematics, algorithms, computer architecture,
        software development, object-oriented programming,
        design principles etc.

        I have gained a lot of experience programming in python and object-oriented programming in java.
        When creating backend applications with java, we have used the Spring framework. I also know how to write SQL and implement SQL databases. The last year I have been wanting to learn more about JavaScript and react for web development and I am going to choose web development as a course next year.
        I have basic knowledge in C from computer architecture and operating system classes.

        The last year I have learned about project management and the Scrum framework. I have used Scrum during two projects where we focused on the processes needed to create good and working software.

      </p>

      <h3>Work and Voluntary Work</h3>
      <p>
        Learning to work efficiently with other people is the most valuable skill I have developed while working.
         I like having responsibility and I enjoy being able to
        influence decisions. During my initial military service, I gained experience in team management as a squad leader. 
        At IKEA I gained experience in sales and logistics. From EWB I worked as an event planner to host events that increase the awareness of
        of aid work, and how we can implement engineering. I learned a lot about planning, communicating with others and how to arrange good events. 
        
        I was not interested in aid before joining
        EWB, but I wanted to spend my free time doing something meaningful. I became more aware of how we can use engineering to help people from less developed countries. After my year at EWB I was encouraged to apply for several 
        board member positions. I took what I learned from EWB and applied for a position in the finance and banking committee in Abakus. 
        I wanted to gain experience with finance, and I hope that I will continue to develop myself at Abakus the next year.

      </p>
    </div>

    {/*the black and white piocture*/}
      <div className="second-transition" id="Contact">
        <h1 className="top-header">Want to know me even better?</h1>
        <PhoneIcon className='icon' style={{ color: 'white' }}/>
        <h2>+47 948 75 600</h2>
        <EmailIcon className='icon' style={{ color: 'white' }}/>
        <h2>erik.torvbraten@outlook.com</h2>
    </div>
    
    

      <Footer/>
    </>
  );
}

export default Home;
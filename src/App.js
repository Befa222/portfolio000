import { React, useState } from 'react';
import './App.css';
import portfolio3d from './video/portfolio3d.mp4'
import pickachew1 from './images/pikaMobile1.png';
import weather1 from './images/weather1.png';
import universe from './images/wildUniverse.png';
import linkedinIcon from './images/linkedin-64.ico';
import gitHubIcon from './images/gitHub.png'


function App() {

  const [project1Details, setProject1Details] = useState(false)
  const [project2Details, setProject2Details] = useState(false)
  const [project3Details, setProject3Details] = useState(false)
  const [project4Details, setProject4Details] = useState(false)

  //   function sendEmail(e) {
  //     e.preventDefault();

  //     emailjs.sendForm('service_42wcai8', 'template_pacrvr9', e.target, 'user_2GGglIWKLZaKHdfcHpWH0')
  //         .then((result) => {
  //             console.log(result.text);
  //         }, (error) => {
  //             console.log(error.text);
  //         });
  // }


  return (
    <>
      <header className='header'>
        <h1 className='logo'>FL</h1>
      </header>

      <section className='intro-section'>
        <h1 className='first-name'>
          Fabien
        </h1><br />
        <h1 className='last-name'>Lallement</h1><br />
        <h2 className='title'>Front End Developer</h2>
        <div className='circle1'></div>
        <div className='circle2'></div>
      </section>

      <section className='about-me-section'>
        <div className='about-me-container'>
          <p className='about-me-text'>I initially used Free Code Camp for a month and enjoyed it a lot! So much that I decided to push myself further by taking on a 5 month Full Stack Web Dev course with Wild Code School.
            During that time, I realized that I enjoy the Front End part of the job, React, CSS and animations.</p>
          <p className='about-me-text'>I recently started to learn React Three Fiber as I found the idea of bringing 3d into a website totally amazing!
            I am having a lot of fun with it while it's making me work on my Javascript too!
            It took me 2 weeks of daily practice before starting this portfolio.</p>
        </div>
      </section>

      <section className='projects-section'>
        <h1 className='section-title'>Projects</h1><br />
        <h3 className='section-title2'>Click on the name for details</h3>
        <div className='number-container'>
          <h2 className='number'>01</h2>
          <h2 onClick={() => setProject1Details(!project1Details)} className='project-title'>3d Portfolio</h2>
        </div>
        {project1Details &&
          <div className='projectDetails'>
            <ul className='project-list'>
              <li>A version of my portfolio using imported 3d models.</li>
              <li>It was a lot of fun and sweat, but a definitely a good training.</li>
              <li>TECH: React, react router, Three JS, hooks, CSS.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://fabien-lallement-3d-portfolio.netlify.app/'>3d Portfolio</a> </li>
            </ul>
          </div>
        }
        {/*//////////////////// DESKTOP START ////////////////////////*/}

        
        <div className='number-container-desktop'>
          <h1 className='number-desktop'>01</h1>
          <h1 className='project-name-desktop'>3d Portfolio</h1>
          <ul className='project-list-desktop'>
              <li>A version of my portfolio using imported 3d models.</li>
              <li>It was a lot of fun and sweat, but a definitely a good training.</li>
              <li>TECH: React, react router, Three JS, hooks, CSS.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://fabien-lallement-3d-portfolio.netlify.app/'>3d Portfolio</a> </li>
            </ul>
        </div>
        {/*//////////////////// DESKTOP END////////////////////////*/}
        
        <div className='img-landscape'>
          <video autoPlay={true} muted={true} loop={true}
            style={{
              borderBottomLeftRadius:"1em",
              borderBottomRightRadius: "1em",
              borderTopLeftRadius:"1em",
              borderTopRightRadius:"1em",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              
            }}
          >
            <source src={portfolio3d} type='video/mp4' />
          </video>
        
        </div>
        <div className='number-container'>
          <h2 className='number'>02</h2>
          <h2 onClick={() => setProject2Details(!project2Details)} className='project-title'>Pick a Chew</h2>
        </div>
        {project2Details &&
          <div className='projectDetails'>
            <ul className='project-list'>
              <li>Total revamp of an old project.</li>
              <li>Food app that finds receipes with the ingredients you have at home.</li>
              <li>Diffrent UI for mobile and desktop.</li>
              <li>TECH: React, Spoonacular Api, JS, Axios, Hooks, CSS, React Router, NPM.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://pick-a-chew.netlify.app/'>Pick a Chew</a></li>
            </ul>
          </div>
        }
        {/*//////////////////// DESKTOP START ////////////////////////*/}

        
        <div className='number-container-desktop'>
          <h1 className='number-desktop'>02</h1>
          <h1 className='project-name-desktop'>Pick a Chew</h1>
          <ul className='project-list-desktop'>
          <li>Total revamp of an old project.</li>
              <li>Food app that finds receipes with the ingredients you have at home.</li>
              <li>Diffrent UI for mobile and desktop.</li>
              <li>TECH: React, Spoonacular Api, JS, Axios, Hooks, CSS, React Router, NPM.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://pick-a-chew.netlify.app/'>Pick a Chew</a></li>
            </ul>
        </div>
        {/*//////////////////// DESKTOP END////////////////////////*/}

        <div className='img-portrait'>
          <img src={pickachew1} alt='Pickechew-home' />
        </div>
        <div className='number-container'>
          <h2 className='number'>03</h2>
          <h2 onClick={() => setProject3Details(!project3Details)} className='project-title'>Weather app</h2>
        </div>
        {project3Details &&
          <div className='projectDetails'>
            <ul className='project-list'>
              <li>Weather app with two different UI.</li>
              <li>App made for training purpose with Neumorphism and Glassphormism.</li>
              <li>TECH: React, Open Weather Api, JS, Styled Components.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://loving-raman-112067.netlify.app/'>Weather App</a></li>
            </ul>
          </div>
        }
         {/*//////////////////// DESKTOP START ////////////////////////*/}

         
        <div className='number-container-desktop'>
          <h1 className='number-desktop'>03</h1>
          <h1 className='project-name-desktop'>Weather App</h1>
          <ul className='project-list-desktop'>
          <li>Weather app with two different UI.</li>
              <li>App made for training purpose with Neumorphism and Glassphormism.</li>
              <li>TECH: React, Open Weather Api, JS, Styled Components.</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://loving-raman-112067.netlify.app/'>Weather App</a></li>
            </ul>
        </div>

        {/*//////////////////// DESKTOP END////////////////////////*/}

        <div className='img-portrait'>
          <img src={weather1} alt='weather-app' />
        </div>
        <div className='number-container'>
          <h2 className='number'>04</h2>
          <h2 onClick={() => setProject4Details(!project4Details)} className='project-title'>Wild Universe</h2>
        </div>
        {project4Details &&
          <div className='projectDetails'>
            <ul className='project-list'>
              <li>Website about our universe.</li>
              <li>First project ever made.</li>
              <li>We were a team of 3.</li>
              <li>TECH: HTML, CSS, JS</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://stoic-mcnulty-b4f347.netlify.app/'>Wild Universe</a></li>
            </ul>
          </div>
        }
         {/*//////////////////// DESKTOP START ////////////////////////*/}

         
        <div className='number-container-desktop'>
          <h1 className='number-desktop'>04</h1>
          <h1 className='project-name-desktop'>Wild Universe</h1>
          <ul className='project-list-desktop'>
          <li>Website about our universe.</li>
              <li>First project ever made.</li>
              <li>We were a team of 3.</li>
              <li>TECH: HTML, CSS, JS</li>
              <li>DEPLOY LINK: <a target='_blank' rel="noreferrer" href='https://stoic-mcnulty-b4f347.netlify.app/'>Wild Universe</a></li>
            </ul>
        </div>
        {/*//////////////////// DESKTOP END////////////////////////*/}
        <div className='img-landscape'>
          <img className='img-universe' src={universe} alt='planets' />
        </div>
      </section>

      <section className='contact-section'>
        <h1 className='section-title'>Contact</h1><br />
        <h3 className='section-title2'>Leave a message!</h3>
        {/* <form onSubmit={sendEmail}> */}

        <form>
          <input className='contact-name' type="text" name="_name" required placeholder='Your Name' />

          <input className='contact-email' type="email" name="_email" required placeholder='Your email' />

          <textarea rows="5" cols="30" name="message" required placeholder='Your message' />

          <input className="send-button" type="submit" value="Send" />
        </form>

      </section>

      <footer className='footer'>
        <div className='links-container'>
          <h1 className='links'>LINKS</h1>
          <img src={linkedinIcon} alt='logo' />
          <img src={gitHubIcon} alt='gitHub-squid' />
          
        </div>
      </footer>
    </>
  )
}

export default App;

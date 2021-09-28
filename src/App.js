import { React, useState } from 'react';
import { Postcard } from './components/Postcard';
import { Navbar } from './components/Navbar';
import portfolio3d from './video/portfolio3d.mp4'
import pickachew1 from './images/pikaMobile1.png';
import weather1 from './images/weather1.png';
import universe from './images/wildUniverse.png';
import linkedinIcon from './images/linkedin-64.ico';
import gitHubIcon from './images/gitHub.png';
import emailjs from 'emailjs-com';
import './App.css';


function App() {

  const [project1Details, setProject1Details] = useState(false);
  const [project2Details, setProject2Details] = useState(false);
  const [project3Details, setProject3Details] = useState(false);
  const [project4Details, setProject4Details] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_42wcai8', 'template_pacrvr9', e.target, 'user_2GGglIWKLZaKHdfcHpWH0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <>
      <header className='header'>
        <h1 className='logo'>FL</h1>
        <Navbar/>
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

      <section id='about-me-section'>
        <article className='about-me-container'>
          <p className='about-me-text'>Hi there! My name is Fabien, I'm French and I've been living in London for 12 years.
          I've started my journey as a Web Dev a year ago after losing my job, as bar manager, due to Covid.</p>
          <p className='about-me-text'>Since then, I've been focused on the Front End part of the job as I fell in love with React and CSS. I also started to learn Three JS, as I found the idea of bringing 3d into a website amazing. It was a good JavaScript training, on which I am concentrating at the moment.</p>
        </article>
      </section>

      <section id='projects-section'>
        <h1 className='section-title'>Projects</h1><br />
        <h3 className='section-title2'>Click on the name for details</h3>

        <article className='project00'>
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
              <li>DEPLOY LINK: <a className='deploy-link' target='_blank' rel="noreferrer" href='https://fabien-lallement-3d-portfolio.netlify.app/'>3d Portfolio</a> </li>
            </ul>
          </div>
          {/*//////////////////// DESKTOP END////////////////////////*/}
          <div className='img-landscape'>
            <video autoPlay={true} muted={true} loop={true}
              style={{
                borderBottomLeftRadius: "1em",
                borderBottomRightRadius: "1em",
                borderTopLeftRadius: "1em",
                borderTopRightRadius: "1em",
                width: "100%",
                height: "100%",
                objectFit: "cover",

              }}
            >
              <source src={portfolio3d} type='video/mp4' />
            </video>
          </div>
        </article>

        <article className='project00'>
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
              <li>DEPLOY LINK: <a className='deploy-link' target='_blank' rel="noreferrer" href='https://pick-a-chew.netlify.app/'>Pick a Chew</a></li>
            </ul>
          </div>
          {/*//////////////////// DESKTOP END////////////////////////*/}
          <div className='img-portrait'>
            <img src={pickachew1} alt='Pickechew-home' />
          </div>
        </article>

        <article className='project00'>
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
              <li>DEPLOY LINK: <a className='deploy-link' target='_blank' rel="noreferrer" href='https://loving-raman-112067.netlify.app/'>Weather App</a></li>
            </ul>
          </div>
          {/*//////////////////// DESKTOP END////////////////////////*/}
          <div className='img-portrait'>
            <img src={weather1} alt='weather-app' />
          </div>
        </article>

        <article className='project00'>
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
              <li>DEPLOY LINK: <a className='deploy-link' target='_blank' rel="noreferrer" href='https://stoic-mcnulty-b4f347.netlify.app/'>Wild Universe</a></li>
            </ul>
          </div>
          {/*//////////////////// DESKTOP END////////////////////////*/}
          <div className='img-landscape'>
            <img className='img-universe' src={universe} alt='planets' />
          </div>
        </article>
      </section>

      <section id='contact-section'>
        <h1 className='section-title'>Contact</h1><br />
        <h3 className='section-title2'>Leave a message!</h3>
        <Postcard />
        <form onSubmit={sendEmail}>
          <input className='contact-name' type="text" name="_name" required placeholder='Your Name' />
          <input className='contact-email' type="email" name="_email" required placeholder='Your email' />
          <textarea name="message" required placeholder='Your message' />
          <input onClick={() => setEmailPopup(!emailPopup)} className="send-button" type="submit" value="Send" />
        </form>
        {emailPopup &&
          <div className='email-popup'>
            <h1>Thank you!</h1>
            <h2>I will come back to you shortly!</h2>
            <button className='popup-button' onClick={() => setEmailPopup(!emailPopup)}>Close</button>
          </div>
        }
      </section>

      <footer id='footer'>
        <div className='links-container'>
          <h1 className='links'>LINKS</h1>
          <a href='https://github.com/Befa222' target='_blank' rel="noreferrer"><img className='githubIcon' src={gitHubIcon} alt='gitHub-squid' /></a>
          <a href='https://www.linkedin.com/in/fabien-lallement-d2s/' target='_blank' rel="noreferrer"><img className='linkedinIcon' src={linkedinIcon} alt='logo' /></a>
        </div>
      </footer>
    </>
  )
}

export default App;

import './App.css';
import portfolio3d from './images/3dport.png'

function App() {

  return (
    <>
      <header className='header'>
        <h1 className='logo'>FL</h1>
      </header>
      <main>
        <section className='intro-section'>
          <h1 className='first-name'>
            Fabien
          </h1>
          <h1 className='last-name'>Lallement</h1>
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
          <h1 className='projects-section-title'>Projects</h1>
          <h3 className='projects-section-title2'>Click on the name for details</h3>
          <div className='number-container'>
            <h2 className='number'>01</h2>
            <h2 className='project-title'>3d Portfolio</h2>
          </div>
          <div className='img1-container'>
            <img src={portfolio3d} />
          </div>
          <div className='number-container'>
            <h2 className='number'>02</h2>
            <h2 className='project-title'>Pick-a-Chew</h2>
          </div>
        </section>

        <section className='contact-section'>

        </section>
      </main>
      <footer className='footer'>

      </footer>
    </>
  )
}

export default App;

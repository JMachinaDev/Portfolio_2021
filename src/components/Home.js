import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "../css/animations.scss";
import { gsap } from "gsap";

// TODO: convert skills to array and map

const skills = ['HTML','CSS','JavaScript','Node.js','React /React Libraries','Responsive Web Design','Headlesss CMS','SEO','CSS Preprocessors/Sass/Tailwind','Bootstrap','JQuery']

export default function Home () {

    useEffect (() => {
        const timeline = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 1.8}})

        timeline.from('.container-heading', {y: '-30%', opacity: 0})
            .from('.container-heading', { clipPath: 'inset(0 0 100% 0)'}, "-=1.5")
            .from('#animation', {opacity: 0, delay: .5, duration: 1}, "-=.1")
            .from('#animation', {x: '-30%', backdropFilter: 'blur(0px)'})
            .from('.seq', {y: -30, opacity: 0, stagger: .2, duration: .5}, "-=.5")
    })

    return (
    <div className="aesthetic container-home">
      <header className="flex absolute justify-center items-center font-semibold ">
        <h1 className='container-heading'>Welcome.</h1>
      </header>
      <div className="gradient-circle-one" id="animation"></div>
      <div className="gradient-circle-two" id="animation"></div>

      <main>
        <section className="container-glass" id='animation'>
          <span className="work-status seq">Open For Work</span>
          <img id="img-profile" alt=""/>

          <section className="card-top-section seq font-semibold">
            <h2>I'm Josue.</h2>
            <p className="text-lg">Front End Web Developer</p>
            <Link to="/contact"> 
              <button className="contact-button mt-2">Message</button>
            </Link>
          </section>

          <section className="card-bottom-section seq mt-4">
            <h6 className="font-bold text-lg">Front End Skills</h6>

            {skills.map((item) => (
              <ul>
                <li>{item}</li>
              </ul>
            ))}

            <div className="social-section">
              <SocialIcon 
                url="https://www.linkedin.com/in/josue-mendez-0a78611ba/"
                target="_blank"
                // fgColor="#eeeeee"
                style={{ height: 45, width: 45}}
              />
              <SocialIcon 
                url="https://github.com/JMachinaDev"
                target="_blank"
                // fgColor="#eeeeee"
                style={{ height: 45, width: 45}}
              />
              <SocialIcon 
                url="https://twitter.com/JMachinaDev"
                target="_blank"
                fgColor="#eeeeee"
                style={{ height: 45, width: 45}}
              />
              <SocialIcon 
                url="mailto:jmachinadev@gmail.com"
                target="_blank"
                fgColor="#eeeeee"
                style={{ height: 45, width: 45}}
              />
            </div>
            
            <a className="buy-coffee" href="https://www.buymeacoffee.com/jmachinadev" target="_blank" rel="noreferrer">
              <img 
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jmachinadev&button_colour=5F7FFF&font_colour=1b222b&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
                alt="Coffee Button"
              />
            </a>
          </section>
        </section>
      </main>
    </div>
  )
}
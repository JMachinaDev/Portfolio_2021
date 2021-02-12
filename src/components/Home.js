import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { gsap } from "gsap";
import DisplayModal from './contactModal';
import '../css/contactModalHome.css';
import "../css/animations.scss";

const skills = ['HTML','CSS','JavaScript','Node.js','React /React Libraries','Responsive Web Design','Headlesss CMS','SEO','Bootstrap','JQuery','CSS Preprocessors/Sass/Tailwind']

export default function Home (props) {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect (() => {
    const timeline = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 1}})
    timeline.from('.animation', {opacity: 0, delay: 1, duration: 1.5}, "-=.1")
      .from('#animation1', {x: '-150%', backdropFilter: 'blur(0px)'},)
      .from('#animation2', {x: '150%', backdropFilter: 'blur(0px)'})
      .from('#seq', {y: -30, opacity: 0, stagger: .2, duration: 1})
  })

  return (
    <main className="aesthetic container-home">
      <DisplayModal handleClose={handleClose} handleShow={handleShow} show={show}/>
      <section className="container-home-main">
        <div className="gradient-circle-one animation" id="animation1"></div>
        <div className="gradient-circle-two animation" id="animation2"></div>
      </section>
      <section className="container-glass" id='seq'>
        <section className="card-top-section  font-semibold">
          <div className="work-status">Open For Work</div>
          <img id="img-profile" alt=""/>
          <header>
            <h2>I'm Josue.</h2>
          </header>
          <p className="text-lg">Front End Web Developer</p>
          <button className="contact-button mt-2" onClick={handleShow}>Message</button>
        </section>
        <section className="card-bottom-section mt-4">
          <header>
            <h6 className="font-bold text-lg">Front End Skills</h6>
          </header>
          <ul>
            {skills.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <nav className="social-section">
            <SocialIcon url="https://www.linkedin.com/in/josue-mendez-0a78611ba/" target="_blank" fgColor="#eeeeee" style={{ height: 45, width: 45}} />
            <SocialIcon url="https://github.com/JMachinaDev" target="_blank" fgColor="#eeeeee" style={{ height: 45, width: 45}} />
            <SocialIcon url="https://twitter.com/JMachinaDev" target="_blank" fgColor="#eeeeee" style={{ height: 45, width: 45}} />
            <SocialIcon url="mailto:jmachinadev@gmail.com" target="_blank" fgColor="#eeeeee" style={{ height: 45, width: 45}} />
          </nav>
          <a className="buy-coffee" href="https://www.buymeacoffee.com/jmachinadev" target="_blank" rel="noreferrer">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jmachinadev&button_colour=5F7FFF&font_colour=1b222b&font_family=Poppins&outline_colour=1b222b&coffee_colour=FFDD00" alt="Coffee Button"/>
          </a>
        </section>
      </section>
    </main>
  )
}
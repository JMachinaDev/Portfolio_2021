import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "../css/animations.scss";
import gsap from "gsap";
// import  Profile  from '../images/profile.jpg'
// import { Icon }  from 'svg-react-loader?name=Icon!...';

export default function Home () {

    useEffect (() => {
        const timeline = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 1.8}})

        timeline.from('.img-glass', {x: '-50%', opacity: 0})
            .from('.container-glass', {opacity: 0, delay: .5, duration: 1}, "-=1.5")
            .from('.container-glass', {x: '-20%', backdropFilter: 'blur(0px)'})
            .from('.seq', {y: -30, opacity: 0, stagger: .2, duration: .5}, "-=.5")
            .from('.container-heading', {y: 30, clipPath: 'inset(0 0 100% 0)'}, "-=.8")

    })

    return (
    <div className="container-home object-cover w-full h-full">
        
        <header className="flex absolute justify-center items-center cursive">
                <h1 className='container-heading'>Welcome.</h1>
        </header>

        <main className="aesthetic">
            <section className="container-glass" id='glass'>
                <Link to="/contact">
                    <span className="work-status seq">Open for work</span>
                </Link>
                
                <img id="img-profile" alt=""/>

                <section className="aesthetic card-top-section seq">
                    <h2>I'm Josue.</h2>
                    <p className="text-lg text-green-200">Front End Web Developer</p>
                    <p className="text-gray-800 text-xs">Elkhart, Indiana</p>

                    <Link to="/contact"> 
                        <button class="contact-button">Message</button>
                    </Link>
                </section>

                <section className="card-bottom-section seq cursive">
                    <h6><b>Front End Skills</b></h6>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsive Web Design</li>
                        <li>React BootStrap</li>
                        <li>JQuery</li>
                        <li>Sass</li>
                        <li>Tailwind</li>
                    </ul>
                
                    <div className="social-section">
                        <SocialIcon 
                            url="https://www.linkedin.com/in/josue-mendez-0a78611ba/"
                            target="_blank"
                            className="mr-4"
                            fgColor="#fff"
                            style={{ height: 45, width: 45}}
                        />
                        <SocialIcon 
                            url="https://github.com/JMachinaDev"
                            target="_blank"
                            className="mr-4"
                            fgColor="#fff"
                            style={{ height: 45, width: 45}}
                        />
                        <SocialIcon 
                            url="https://twitter.com/JMachinaDev"
                            target="_blank"
                            className="mr-4"
                            fgColor="#fff"
                            style={{ height: 45, width: 45}}
                        />
                        <SocialIcon 
                            url="mailto:jmachinadev@gmail.com"
                            target="_blank"
                            className="mr-4"
                            fgColor="#fff"
                            style={{ height: 45, width: 45}}
                        />
                    </div>
                </section>
            </section>
        </main>
    </div>
    )
}
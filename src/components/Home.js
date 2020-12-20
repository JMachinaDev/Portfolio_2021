import React, { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import "../css/Home.scss";
import gsap from "gsap";
// import  Profile  from '../images/profile.jpg'
// import { Icon }  from 'svg-react-loader?name=Icon!...';

export default function Home () {

    useEffect (() => {
        const timeline = gsap.timeline({defaults: {ease: 'power2.inOut', duration: 2}})

        timeline.from('.img-glass', {x: '-50%', opacity: 0})
            .from('.container-glass', {opacity: 0, delay: .5, duration: 1}, "-=1.5")
            .from('.container-glass', {x: '-50%', backdropFilter: 'blur(0px)'})
            .from('.seq', {y: -30, opacity: 0, stagger: .2, duration: .5}, "-=.5")
            .from('.h1', {y: 20, clipPath: 'inset(0 0 100% 0)'}, "-=.8")
    })

    return (
    <div className="absolute object-cover w-full h-full">
        <main>

            {/* <img src="/portfolio/src/svg/Illuminati.svg" className='img-glass'alt=""/> */}
            {/* <Icon className="normal" /> */}
            <h1 className='h1'>Welcome.</h1>

            {/* className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" */}
            <section className="container-glass" id='glass'>
                
                <img  class="seq" id="img-profile" alt="" />
                
                {/* className="text-4xl text-red-500 font-bold cursive leading-none lg-leading-snug home-name" */}
                <h2 class="seq">I'm Josue</h2>
                <h3 class="seq"><em>noun.</em> [ ho-sweh]</h3>

                <div className="inline-flex py-3 px-3 my-6">
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
                        url="https://dev.to/jmachinadev"
                        target="_blank"
                        className="mr-4"
                        fgColor="#fff"
                        style={{ height: 45, width: 45}}
                    />
                </div>
            </section>
            
        </main>
    </div>
    )
}
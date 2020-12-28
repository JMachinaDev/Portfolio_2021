import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/animations.scss";

export default function NavBar () {
    return (
        <header className="dark-theme aesthetic absolute w-full pb-1 z-50">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    <NavLink 
                        className="aesthetic popout-effect font-bold inflex-flex items center mt-2 mr-4 text-4xl tracking-widest"
                        activeClassName="popout-nav"
                        to="/" 
                        exact
                    >
                        JM
                    </NavLink>
                    <NavLink 
                        className="popout-effect font-semibold inflex-flex items center text-xl mt-4 mr-4"
                        activeClassName="popout-nav"
                        to="/post">
                        Blog
                    </NavLink>
                    <NavLink 
                        className="popout-effect font-semibold inflex-flex items center text-xl mt-4 mr-4"
                        activeClassName="popout-nav"
                        to="/project">
                        Projects
                    </NavLink>
                    <NavLink 
                        className="popout-effect font-semibold inflex-flex items center text-xl mt-4 mr-4"
                        activeClassName="popout-nav"
                        to="/about">
                        About Me
                    </NavLink>
                    {/* <NavLink 
                        className="popout-effect-nav inflex-flex items center text-xl mt-4 mr-4"
                        // activeClassName="popout-nav"
                        to="/contact">
                        Contact
                    </NavLink> */}
                </nav>
            </div>
        </header>
    )
}
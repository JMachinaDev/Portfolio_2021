import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/animations.scss";

export default function NavBar () {
  return (
    <main className="dark-theme aesthetic absolute w-full pb-1 z-50">
      <div className=" mx-2 flex justify-center">
        <nav className="navbar-container flex">
          <NavLink 
            className="aesthetic popout-effect font-bold inflex-flex items center mt-1 mr-4 text-4xl tracking-widest"
            activeClassName="popout-nav"
            to="/" 
            exact>
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
            to="/postTasks">
            Tasks
          </NavLink>
          <NavLink 
            className="popout-effect font-semibold inflex-flex items center text-xl mt-4 mr-4"
            activeClassName="popout-nav"
            to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </main>
  )
}
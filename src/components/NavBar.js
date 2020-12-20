import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar () {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        className="inflex-flex items center py-6 px-3 mr-4 text-gray-200 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white"
                        to="/" 
                        exact
                    >
                        JM
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800 cursive"
                        activeClassName="text-gray-900 bg-blue-200 hover:text-red-600"
                        to="/post">
                        Red Pill
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800 cursive"
                        activeClassName="text-gray-900 bg-blue-200 hover:text-red-600"
                        to="/project">
                        Projects
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800 cursive"
                        activeClassName="text-gray-900 bg-blue-200 hover:text-red-600"
                        to="/about">
                        About Me
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800 cursive"
                        activeClassName="text-gray-900 bg-blue-200 hover:text-red-600"
                        to="/contact">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
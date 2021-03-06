import React, { useEffect, useState }from 'react';
import { Client } from '../services/FetchClient';

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  const initializeData = () => {
    const client = new Client();
    client.listProjects()
      .then((data) => setProjectData(data))
      .catch(console.error);
  };
  useEffect(initializeData, []);

  if(!projectData) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

  return (
  <main className="dark-theme min-h-screen p-10">
    <section className="container mx-auto aesthetic">
      <h1 className="title-style popout-effect inline-block text-5xl text-left font-semibold pt-6 mb-12 mt-10">Web Apps</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-flow gap-6 ">

      {projectData && projectData.map((project) => (
        <article className="med-theme border-style relative rounded shadow-xl p-4 h-auto w-auto">
          <h3 className="gradiant-blue inline-block text-3xl h-auto w-auto mb-3 py-2 px-4 rounded">
            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="rounded"/>
          <section className="text-gray-500 text-xs ">
            <span>
              <strong className="font-bold">Posted on</strong>
              :{" "}{new Date(project.date).toLocaleDateString()} 
            </span>
            <span>
              <strong className="font-bold pl-2">Type</strong>
              :{" "}{project.projectType}
            </span>
            <p className="aesthetic text-base mb-6 mt-6 leading-relaxed max-h-36 overflow-y-auto">{project.description}</p>
            <a href={project.link} rel="noopener noreferrer" target="_blank" className="contact-button">Live Demo &gt;{" "}</a>
            <p className="pt-4 pb-4">{project.tags.join('/ ')}</p>
          </section>
        </article>
      ))}

      </section>
    </section>
  </main>
  );
}

export default Project;
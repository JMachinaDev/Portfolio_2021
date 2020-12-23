import React, { useEffect, useState }from 'react';
import sanityClient from "../client.js";


export default function Project () {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            date,
            projectType,
            description,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="dark-theme min-h-screen p-12">
            <section className="container mx-auto aesthetic">
                <h1 className="title-style popout flex justify-center mb-12">Web Apps</h1>
                <section className="grid md:grid-cols-2 lg:grid-cols-flow gap-8 ">

                    {/* mapping over all the data that is clickable */}
                    {projectData && projectData.map((project, index) => (
                    <article className="light-theme relative rounded-lg shadow-xl p-8 h-auto w-auto">
                        <h3 className="project-style text-center block relative px-1 pt-2 pb-3 hover:text-red-500">
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <img 
                            src={project.mainImage.asset.url} 
                            alt={project.mainImage.alt} 
                            // className="min-h-screen"
                        />
                        <section className="text-gray-500 text-xs space-x-2">
                            <span>
                                <strong className="font-bold">Posted on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()} 
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg font-semibold text-gray-900 leading-relaxed max-h-36 overflow-y-auto">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 text-sm font-bold hover:underline hover:text-gray-900">
                                Live Demo{" "}
                            </a>
                            <p>
                                {project.tags}
                            </p>
                        </section>
                    </article>
                    ))}

                
                </section>
            </section>
        </main>
    );
}
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
        <main className="bg-gray-800 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-red-500 flex justify-center cursive">Web Apps</h1>
                <h2 className="text-base text-white font-semibold flex justify-center pt-6 mb-12 text-center">- These are some Web Apps I have made -</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-flow gap-8 ">

                    {/* mapping over all the data that is clickable */}
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-8 h-auto w-auto">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-500">
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <img 
                            src={project.mainImage.asset.url} 
                            alt={project.mainImage.alt} 
                            // className="min-h-screen"
                        />
                        <div className="text-gray-500 text-xs space-x-2">
                            <span>
                                <strong className="font-bold">Posted on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()} 
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed max-h-36 overflow-y-auto">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 text-sm font-bold hover:underline hover:text-red-400">
                                Live Demo{" "}
                            </a>
                        </div>
                    </article>
                    ))}

                
                </section>
            </section>
        </main>
    );
}
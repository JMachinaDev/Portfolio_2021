import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
// import  backgroundImage from '../images/backgroundImage.jpg';
import profileImage from '../images/profileImage.jpg'
import BlockContent from "@sanity/block-content-to-react"


export default function About () {
    const [author, setAuthor] =useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "author"]{
            bio,
            "authorImage": image.asset-url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;
    

    return (
        <main className="aesthetic dark-theme absolute w-full h-full">
            <div className="p-10 container mx-auto relative">
                <section className="med-theme rounded-lg shadow-2xl p-8">

                    <h1 className="text-6xl font-bold mb-4">
                        Hey there. I'm{" "}
                        <span className="text-blue">Josue Mendez</span>
                    </h1>

                    <div className="inline relative">
                        <img 
                            src={profileImage}
                            className="object-cover max-h-72 w-full mt-2 mb-4 rounded"
                            // object-cover w-full h-auto lg:w-3/4 lg:h-64 mr-8
                            alt={author.name}
                        />
                    </div>

                    <div className="text-lg flex flex-col justify-center">
                        
                        <div className="text-base font-semibold text-gray-300 prose lg:prose-xl">
                            <BlockContent 
                                blocks={author.bio}
                                projectId="3ftsgi69"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
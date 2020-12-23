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
        <main className="relative">
            {/* <img src={backgroundImage} alt="Mt.Fuji" className="absolute object-cover w-full h-full"/> */}
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gray-600 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={profileImage}
                        className="rounded object-cover w-full h-auto lg:w-3/4 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-green-100">Josue Mendez</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
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
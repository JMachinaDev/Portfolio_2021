import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Post () {
    const [postData, setPost] = useState(null);
    
    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    if(!postData) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

    return (
        <main className="bg-gray-800 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-red-500 flex justify-center cursive">Red Pill</h1>
                <h2 className="text-base text-white font-semibold flex justify-center pt-6 mb-2 text-center">- Articles, Guides & bits of Knowledge written by me -</h2>
                <h2 className="text-base text-center text-red-500 flex justify-center mb-8"> "You take the red pill...you stay in Wonderland, and I show you how deep the rabbit hole goes." - Morpheus</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* mapping over all the data that is clickable */}
                    { postData && postData.map((post, index) => (
                    <article>
                        <Link 
                            to={"/post/" + post.slug.current} 
                            key={post.slug.current}
                        >
                            <span 
                                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-500" 
                                key={index}
                            >
                                <img 
                                    src={post.mainImage.asset.url} 
                                    alt={post.mainImage.alt} 
                                    className="w-full h-full rounded-r object-cover absolute"
                                />
                                <span 
                                    className="block relative h-full flex justify-end items-end pr-4 pb-4"
                                >
                                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-blue-400 text-red-100 bg-opacity-75 rounded">
                                        {post.title} 
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}

                </div>
            </section>
        </main>
    )
};
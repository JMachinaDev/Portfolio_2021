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
            },
            date,
            description,
            tags
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    if(!postData) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

    return (
        <main className="dark-theme min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="title-style popout-effect inline-block text-5xl text-left font-semibold pt-6 mb-12 mt-12">Articles</h1>
                {/* <h2 className="border-style aesthetic text-lg text-left rounded-l mb-12 mt-4 px-2"><blockquote> "You take the <b className="text-red-600">red pill</b>...you stay in Wonderland, and I show you how deep the rabbit hole goes." - Morpheus</blockquote></h2> */}
                
                <div className="grid md:grid-cols-flow lg:grid-cols-2 gap-12">
                    
                    {/* mapping over all the data that is clickable */}
                    { postData && postData.map((post, index) => (
                    <article>
                        <Link 
                            to={"/post/" + post.slug.current} 
                            key={post.slug.current}
                        > 
                            <section
                                className="med-theme border-style block h-auto relative shadow-xl leading-snug p-4 rounded" 
                                key={index}
                            >   
                                <div className="gradiant-blue inline-block relative h-auto w-auto mr-3 px-4 rounded">
                                    <p>{post.tags}</p>
                                </div>

                                <span>
                                    <strong className="text-xs text-gray-600">
                                    {new Date(post.date).toLocaleDateString()} 
                                    </strong>
                                </span>

                                <h3 className="blog-style text-center block relative pt-2">
                                        {post.title} 
                                </h3>

                                <div className="inline relative">
                                    <img 
                                        src={post.mainImage.asset.url} 
                                        alt={post.mainImage.alt} 
                                        className="object-cover max-h-24 w-full mt-2 mb-4 rounded"
                                    />
                                </div>

                                

                                <p className="pb-6 text-base text-white leading-relaxed max-h-36 overflow-y-auto">
                                    {post.description}
                                </p>
                                {/* aesthetic popout-effect leading-relaxed relative inline-block font-semibold text-xl mt-1 */}
                                <button className="contact-button">Read More > </button>
                            </section>
                        </Link>
                    </article>
                    ))}

                </div>
            </section>
        </main>
    )
};
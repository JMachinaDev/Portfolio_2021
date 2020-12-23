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
                <h1 className="title-style popout-effect inline-block text-5xl text-left font-semibold pt-6 mb-2 ">Articles</h1>
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
                                className=" border-style block h-auto relative shadow-lg leading-snug px-2 rounded-l" 
                                key={index}
                            >   
                                <div className="tag-style text-sm leading-relaxed inline-block relative h-auto w-auto mr-3 px-4 rounded-r">
                                    <p>{post.tags}</p>
                                </div>

                                <span>
                                    <strong className="text-xs text-gray-600">
                                    {new Date(post.date).toLocaleDateString()} 
                                    </strong>
                                </span>

                                <div className="inline relative">
                                    <img 
                                        src={post.mainImage.asset.url} 
                                        alt={post.mainImage.alt} 
                                        className="object-cover max-h-24 w-full mt-2 rounded"
                                    />
                                </div>

                                <h3 className="blog-style text-center inline-block relative pt-2 pb-2 mb-5 border-b-2">
                                        {post.title} 
                                </h3>

                                <p className="pb-6 text-base text-white leading-relaxed max-h-36 overflow-y-auto">
                                    {post.description}
                                </p>

                                <button className="tag-style font-extrabold leading-relaxed relative inline-block rounded-r mr-3 mb-3 px-4">Read More > </button>
                            </section>
                        </Link>
                    </article>
                    ))}

                </div>
            </section>
        </main>
    )
};
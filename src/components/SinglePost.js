import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../css/animations.scss';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source)
}

export default function SinglePost () {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() =>{
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`)
    .then((data)=> setSinglePost(data[0]))
    .catch(console.error);
}, [slug]);

  if(!singlePost) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

  return (
    <main className="bg-gray-900 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-gray-300 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div id="singlePost-card">
              <h1 className="cursive text-3xl lg:text-6xl mb-4 text-white">
                  {singlePost.title}
              </h1>
              <div className="flex justify-center ">
                  <img src={urlFor(singlePost.authorImage).url()} 
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                  />
              </div>
              <p className="cursive text-center px-2 text-1xl text-white">
                  {singlePost.name}
              </p>
            </div>
          </div>
          <img 
              src={singlePost.mainImage.asset.url} 
              alt={singlePost.title}
              className="w-full object-cover rounded-t"
              style={{height: '400px'}}
          />
        </header>
        <div className="p-10 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-black aesthetic">
            <BlockContent  
                blocks={singlePost.body} 
                projectId="3ftsgi69" 
                dataset="production"
            />
        </div>
      </article>
    </main>
  )
}
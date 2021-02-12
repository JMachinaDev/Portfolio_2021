import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../css/animations.scss';
import '../css/singlePostStyle.css';

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
          <div className="absolute h-full w-full">
            {/* <div id="singlePost-card"></div> */}
          </div>
          <img
            src={singlePost.mainImage.asset.url} 
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{height: '400px'}}
          />
        </header>
        <div className="article light-theme p-10 lg:px-14 py-12 lg:py-12 lg:prose-lg max-w-full rounded">
          <h1 className="article article-header text-3xl lg:text-6x">{singlePost.title}</h1>
          <div className="article-header-container">
            <img src={urlFor(singlePost.authorImage).url()} 
              alt={singlePost.name}
              className="float-left m-0 w-10 h-10 rounded-full"
            />
            <p className="cursive text-left mx-2 text-1xl">{singlePost.name}</p>
          </div>
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
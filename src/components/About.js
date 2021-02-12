import React, { useEffect, useState } from 'react';
import { Client } from '../services/FetchClient';
import profileImage from '../images/profileImage.jpg';
import BlockContent from "@sanity/block-content-to-react";
import '../css/aboutStyle.css';

export default function About () {
  const [author, setAuthor] =useState(null);

  const initializeData = () => {
    const client = new Client();
    client.fetchAuthor()
    .then((data) => {
      setAuthor(data[0])
    })
    .catch(console.error);
  }
  useEffect(initializeData, []);

  if(!author) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;
  
  return (
    <main className="aesthetic dark-theme absolute w-full h-full pt-24">
      <div className="p-10 container mx-auto relative">
        <section className="about-container med-theme rounded-lg shadow-2xl p-8">
         <header className="about-header">
            <h1 className="text-6xl font-bold mb-4">Hey there. I'm{" "}
              <span className="text-blue">Josue Mendez</span>
            </h1>
          </header>
          <div className="about-image">
            <img
              src={profileImage}
              className="object-cover max-h-full max-w-full mt-2 mb-4 rounded"
              alt={author.name}
            />
          </div>
          <div className="about-content text-lg">
            <BlockContent
              className="text-base font-semibold text-gray-300 prose lg:prose-xl"
              blocks={author.bio}
              projectId="3ftsgi69"
              dataset="production"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
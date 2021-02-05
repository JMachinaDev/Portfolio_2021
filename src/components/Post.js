import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../services/FetchClient';
import Pagination from 'react-sanity-pagination';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import '../css/paginationStyle.css';


// TODO: move to subfolder blogposts, create 2 components one fetches data one displays

const itemsToSend = [];

export default function Post () {
  const [postData, setPost] = useState([]);

  const postsPerPage = 2;

  const initializeData = () => {
    console.log('reinitializing data', itemsToSend)
    const client = new Client();
    client.listBlogPosts()
      .then((data) => {
        while(itemsToSend.length > 0){
          itemsToSend.pop();
        }
        itemsToSend.push(...data)
      })
      .catch(console.error);
  };
  useEffect(initializeData, []);

  const action = (page, range, postData) => {
    console.log('Page: ', page, 'Items: ', postData);
    setPost(postData);
  };

  if(!postData) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

  return (
  <main className="dark-theme min-h-screen p-12">
    <section className="container mx-auto">
      <h1 className="title-style popout-effect inline-block text-5xl text-left font-semibold pt-6 mb-12 mt-12">
        Articles
      </h1>
      <div className="grid md:rows-auto lg:grid-cols gap-12">

        { postData && postData.map((post, index) => (
        <article key={index}>
          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
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
              <h3 className="blog-style text-center block relative pt-2">{post.title}</h3>
              <div className="inline relative">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  className="object-cover max-h-24 w-full mt-2 mb-4 rounded"
                />
              </div>
              <p className="pb-6 text-base text-white leading-relaxed max-h-36 overflow-y-auto">{post.description}</p>
              <button className="contact-button">Read More </button>
              </section>

          </Link>
        </article>
        ))}

        <Pagination
          nextButton = {true}
          prevButton = {true}
          nextButtonLabel = {<BsChevronRight/>}
          prevButtonLabel = {<BsChevronLeft/>}
          items = {itemsToSend}
          action = {action}
          postsPerPage = {postsPerPage}
        />

      </div>
    </section>
  </main>
  )
};
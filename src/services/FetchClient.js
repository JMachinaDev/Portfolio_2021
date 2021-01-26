import sanityClient from '../client';

export class Client {
  constructor () {
    this.client = sanityClient;
  }

  listTasks = () => {
    return this.client
    .fetch(
      `*[_type == "task"]{
      title,
      slug,
      date,
      description,
      url,
      'name': author->name,
      'authorImage': author->image,
    }`);
  }

  listProjects = () => {
    return this.client
    .fetch(`*[_type == "project"]{
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
    }`);
  }

  listBlogPosts = () => {
    return this.client
    .fetch(`*[_type == "post"]{
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
    }`);
  }

};

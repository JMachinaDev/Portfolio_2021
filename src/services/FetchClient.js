import sanityClient from '../client';

export class Client {
  constructor () {
    this.client = sanityClient;
  }

  // TODO: add other fetch types here, and call them in thier respective files
  fetchData = () => {
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
}
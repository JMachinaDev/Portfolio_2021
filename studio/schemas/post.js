export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'description',
      type: 'text',
      maxLength: 96,
    },
    {
      name: 'tags',
      type: 'array',
      of: [
          {
              type: 'string',
          },
      ],
      options: {
          layout: 'tags',
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

// {
    //   name: 'category',
    //   type: 'array',
    //   // maxLength: 24,
    //   // type: 'array',
    //   // of: [{type: 'reference', to: {type: 'category'}}],
    // },
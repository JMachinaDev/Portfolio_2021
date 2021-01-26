export default {
  name: 'task',
  title: 'Task',
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
      name: 'date',
      type: 'datetime',
    },
    {
      name: 'description',
      type: 'text',
      maxLength: 96,
    },
    {
      name: 'url',
      title: 'Git Link',
      type: 'url',
    }
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

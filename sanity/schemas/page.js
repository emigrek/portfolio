export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'github',
      title: "Github URL",
      type: 'string'
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text' 
    },
    {
      name: "birthday",
      title: "Birthday",
      type: "date"
    },
    {
      name: "city",
      title: "City",
      type: "string"
    },
    {
      name: "country",
      title: "Country",
      type: "string"
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}]
    }
  ]
}

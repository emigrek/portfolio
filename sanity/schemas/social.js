export default {
    name: 'social',
    title: 'Social',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: "string"
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        }
    ]
}

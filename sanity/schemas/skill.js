export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: "string"
        },
        {
            name: 'progress',
            title: 'Progress',
            type: "number",
            description: 'Progress in percentage',
            validation: (Rule) => Rule.min(0).max(100)
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
            name: 'color',
            title: 'Color',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        }
    ]
}

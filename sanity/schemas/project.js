export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: "string"
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        },
        {
            name: 'progress',
            title: 'Progress',
            type: "number",
            description: 'Progress in percentage',
            validation: (Rule) => Rule.min(0).max(100)
        },
        {
            name: 'url',
            title: "URL",
            type: "string",
            description: 'URL to the project',
            initialValue: null
        },
        {
            name: 'repo',
            title: "Github Repo",
            type: "string",
            description: 'URL to the Github repo',
            initialValue: null
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'reference', to: {type: 'skill'}}]
        },
        {
            name: 'pinned',
            title: 'Pinned',
            type: 'boolean',
            description: 'Pin this project to the top of the list',
        }
    ]
}

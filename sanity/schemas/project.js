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
            description: 'URL to the project'
        },
        {
            name: 'repo',
            title: "Github Repo",
            type: "string",
            description: 'URL to the Github repo'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'reference', to: {type: 'skill'}}]
        }
    ]
}

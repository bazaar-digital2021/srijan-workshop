import { defineField, defineType } from 'sanity'

export const HomeContentType = defineType({
    name: 'homeContent',
    title: 'Home Content',
    type: 'document',
    fields: [
        defineField({
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Hero Images', value: 'hero-images' },
                    { title: 'Saree Category', value: 'saree-category' },
                    { title: 'Clothing', value: 'clothing' },
                    { title: 'Home Decor', value: 'home-decor' },
                    { title: 'Our Collection', value: 'collection' },
                ],
            },
            validation: (Rule) => Rule.required().error('Please select a content type'),
        }),
        defineField({
            name: 'docName',
            title: 'Document Name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        })
    ],
    preview: {
        select: {
            title: 'docName',
            media: 'image',
        },
    },
})
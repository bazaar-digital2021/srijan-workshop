import { Footprints, Navigation } from "lucide-react";
import { defineField, defineType } from "sanity";


export const FooterType = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: Footprints,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'expolore',
            title: 'Explore',
            type: 'array',
            icon: Navigation,
            of: [{
                type: 'object', fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
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
                ]
            }],
        }),
        defineField({
            name: 'help',
            title: 'Help and Support',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
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
                ]
            }],
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
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
                ]
            }],

        }),
        // defineField({
        //     name: 'categories',
        //     title: 'Categories',
        //     type: 'array',
        //     of: [{
        //         type: 'object', fields: [
        //             defineField({
        //                 name: 'title',
        //                 title: 'Title',
        //                 type: 'string',
        //             }),
        //             defineField({
        //                 name: 'slug',
        //                 title: 'Slug',
        //                 type: 'slug',
        //                 options: {
        //                     source: 'title',
        //                     maxLength: 96,
        //                 },
        //             }),
        //         ]
        //     }],
        // }),
    ],
});
import { defineField, defineType } from "sanity";

export const NavbarType = defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string'
        }),
        defineField({
            name: 'navMenu',
            title: 'Nav Menu',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});
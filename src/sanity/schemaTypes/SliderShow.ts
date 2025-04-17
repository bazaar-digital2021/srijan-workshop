import { defineField, defineType } from "sanity";

export const SliderShowType = defineType({
    name: 'sliderShow',
    title: 'Slider Show',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
});
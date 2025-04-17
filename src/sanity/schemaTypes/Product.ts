
import { BiLogoProductHunt } from "react-icons/bi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: BiLogoProductHunt,
    fields: [
        defineField({
            name: 'productName',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'Slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [{ type: "categories" }],
            options: {
                filter: "isActive == true && isVisible == true",
                disableNew: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subCategory',
            title: 'Sub Categories',
            type: 'string',
            options: {
                list: [
                    { title: 'Chanderi Sarees', value: 'chanderi-sarees' },
                    { title: 'Paper Silk', value: 'paper-silk' },
                    { title: 'Tussar silk', value: 'tussar-silk' },
                ],

            },
            hidden: ({ document }) => document?.category !== 'sarees'

        }),
        defineField({
            name: 'brandName',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ['None'],
            // validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ['None', 'None'],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'minPrice',
            type: 'number',
            initialValue: 1,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'maxPrice',
            type: 'number',
            initialValue: 100,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'minQuantity',
            type: 'number',
            validation: (rule) => rule.required(),
            initialValue: 1000
        }),
        defineField({
            name: 'leadTime',
            type: 'number',
            initialValue: 30
        }),
        defineField({
            name: 'unitMeasurement',
            type: 'string',
            initialValue: 'pieces'
        }),
        defineField({
            name: 'hsnCode',
            title: 'HSN Code',
            type: 'number',
            initialValue: 56012110,
            validation: (rule) => rule.required().error("A HSN CODE is a 8 digit number")
        }),
        defineField({
            name: 'packagingDetails',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'origin',
            type: 'string',
            initialValue: 'India',
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'productFamily',
            title: 'Product Family',
            type: 'reference',
            to: [{ type: 'productFamily' }]
        }),
        defineField({
            name: "productCustomAttributes",
            title: "Custom Attributes",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "attributeName", type: "string", title: "Attribute Name" },
                        { name: "value", type: "array", title: "Value", of: [{ type: 'string' }] }
                    ]
                }
            ]
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true
        }),
        defineField({
            name: 'isVisible',
            title: 'Is Visible',
            type: 'boolean',
            initialValue: true
        })
    ],
})
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
            name: 'price',
            type: 'number',
            initialValue: 2999,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'totalDiscount',
            title: 'Total Discount in percentage',
            type: 'number',
            initialValue: 0
        }),
        defineField({
            name: 'totalQuantity',
            type: 'number',
            validation: (rule) => rule.required(),
            initialValue: 1000
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
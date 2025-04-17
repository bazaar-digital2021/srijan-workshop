import { defineField, defineType } from "sanity";

export const subCategoriesType = defineType({
    name: 'subCategories',
    title: 'Sub Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'subCategoryName',
            title: 'Sub Category Name',
            type: 'string',
        }),
        defineField({
            title: 'Saree Subcategory',
            name: 'sareeSubcategory',
            type: 'string',
            hidden: ({ document }) => document?.categorySet !== 'sarees',
            options: {
                list: [
                    { title: 'Chanderi Sarees', value: 'chanderi-sarees' },
                    { title: 'Paper Silk', value: 'paper-silk' },
                    { title: 'Tussar silk', value: 'tussar-silk' },
                ]
            },
            validation: (Rule) => Rule.custom((value, context) => {
                // Only validate if this field is relevant
                if (context.document?.categorySet === 'sarees' && !value) {
                    return 'Please select a subcategory';
                }
                return true;
            })
        }),
        defineField({
            title: 'Dupatta Subcategory',
            name: 'dupattaSubcategory',
            type: 'string',
            hidden: ({ document }) => document?.categorySet !== 'dupattas',
            options: {
                list: [
                    { title: 'Cotton Dupattas', value: 'cotton-dupattas' },
                    { title: 'Silk Dupattas', value: 'silk-dupattas' },
                    { title: 'Embroidered Dupattas', value: 'embroidered-dupattas' },
                ]
            },
            validation: (Rule) => Rule.custom((value, context) => {
                if (context.document?.categorySet === 'dupattas' && !value) {
                    return 'Please select a subcategory';
                }
                return true;
            })
        }),
        defineField({
            title: 'Kurti Subcategory',
            name: 'kurtiSubcategory',
            type: 'string',
            hidden: ({ document }) => document?.categorySet !== 'kurtis',
            options: {
                list: [
                    { title: 'Cotton Kurtis', value: 'cotton-kurtis' },
                    { title: 'Silk Kurtis', value: 'silk-kurtis' },
                ]
            },
            validation: (Rule) => Rule.custom((value, context) => {
                if (context.document?.categorySet === 'kurtis' && !value) {
                    return 'Please select a subcategory';
                }
                return true;
            })
        }),
    ],
})
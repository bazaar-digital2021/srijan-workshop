import { defineField, defineType } from 'sanity'
import { MdCategory } from "react-icons/md";

export const categoriesType = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    icon: MdCategory,
    fields: [
        defineField({
            title: 'Category Name',
            name: 'categoryName',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Category Set',
            name: 'categorySet',
            type: 'string',
            options: {
                list: [
                    { title: 'Saree', value: 'sarees' },
                    { title: 'Kurti', value: 'kurtis' },
                    { title: 'Stiched Kurti', value: 'stiched-kurtis' },
                    { title: 'Unstiched Kurti', value: 'unstiched-kurtis' },
                    { title: 'Dupatta', value: 'dupattas' },
                    { title: 'Bangles', value: 'bangles' },
                    { title: 'Bottom Wear', value: 'bottom-wear' },
                    { title: 'Mens Wear', value: 'mens-wear' },
                    { title: 'Home Decor', value: 'home-decor' },
                ]
            },
            validation: (Rule) => Rule.required().error('Please select a category type'),
        }),
        // Conditional fields for each category type
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
        // Add similar fields for other categories
        // ...
        defineField({
            name: 'image',
            title: 'Category image',
            type: 'image'
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
    preview: {
        select: {
            title: 'categoryName',
            subtitle: 'categorySet',
            media: 'image',
            sareeSubcategory: 'sareeSubcategory',
            dupattaSubcategory: 'dupattaSubcategory',
            kurtiSubcategory: 'kurtiSubcategory',
            // Add other subcategories here
        },
        prepare(selection) {
            const {
                title,
                subtitle,
                media,
                sareeSubcategory,
                dupattaSubcategory,
                kurtiSubcategory
            } = selection;

            // Determine which subcategory to show based on the category
            let subCategory = '';
            if (subtitle === 'sarees') subCategory = sareeSubcategory;
            else if (subtitle === 'dupattas') subCategory = dupattaSubcategory;
            else if (subtitle === 'kurtis') subCategory = kurtiSubcategory;
            // Add other categories here

            return {
                title,
                subtitle: `${subtitle}${subCategory ? ` - ${subCategory}` : ''}`,
                media
            };
        }
    }
})
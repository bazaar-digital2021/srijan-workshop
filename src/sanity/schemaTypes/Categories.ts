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
                    { title: 'Blouse', value: 'blouse' },
                    { title: 'Bottom Wear', value: 'bottom-wear' },
                    { title: 'Mens Wear', value: 'mens-wear' },
                    { title: 'Bed Sheets', value: 'bed-sheets' },
                    { title: 'Paintings', value: 'paintings' },
                    { title: 'Table Cloth', value: 'table-cloth' },
                    { title: 'Cussion Cover', value: 'cussion-cover' },
                    { title: 'Sofa Cover', value: 'sofa-cover' }
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
                    { title: 'Malbon Silk', value: 'malbon-silk' }
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
                    { title: 'Chanderi Dupattas', value: 'chanderi-dupattas' },
                    { title: 'Paper Silk', value: 'paper-silk' },
                    { title: 'Tussar silk', value: 'tussar-silk' },
                    { title: 'Siffon Silk', value: 'siffon-silk' },
                    { title: 'khadi Stoles', value: 'khadi-stoles' }
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
            hidden: ({ document }) => !['kurtis', 'stiched-kurtis', 'unstiched-kurtis'].includes((document as any)?.categorySet),
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
        defineField({
            title: 'Bottom Wear Subcategory',
            name: 'bottomSubcategory',
            type: 'string',
            hidden: ({ document }) => !['bottom-wear'].includes((document as any)?.categorySet),
            options: {
                list: [
                    { title: 'Plazo', value: 'plazo' },
                    { title: 'Skirt', value: 'skirt' },
                ]
            },
        }),
        defineField({
            title: 'Mens Wear Subcategory',
            name: 'mensSubcategory',
            type: 'string',
            hidden: ({ document }) => !['mens-wear'].includes((document as any)?.categorySet),
            options: {
                list: [
                    { title: 'Kurta', value: 'kurta' },
                    { title: 'Shirt', value: 'shirt' },
                    { title: 'Dhoti', value: 'dhoti' },
                ]
            },
        }),
        defineField({
            title: 'Bed Sheet Subcategory',
            name: 'bedSheetSubcategory',
            type: 'string',
            hidden: ({ document }) => !['bed-sheets'].includes((document as any)?.categorySet),
            options: {
                list: [
                    { title: 'Indian Size', value: 'indian-size' },
                    { title: 'Uk Size', value: 'uk-size' },
                ]
            },
        }),
        defineField({
            title: 'Painting Subcategory',
            name: 'paintingSubcategory',
            type: 'string',
            hidden: ({ document }) => !['painting'].includes((document as any)?.categorySet),
            options: {
                list: [
                    { title: 'Hand made paper', value: 'hand-made-paper' },
                    { title: 'Silk Fabric', value: 'silk-fabric' },
                    { title: 'Canvas', value: 'canvas' }
                ]
            },
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
            mensSubcategory: 'mensSubcategory'
            // Add other subcategories here
        },
        prepare(selection) {
            const {
                title,
                subtitle,
                media,
                sareeSubcategory,
                dupattaSubcategory,
                kurtiSubcategory,
                mensSubcategory
            } = selection;

            // Determine which subcategory to show based on the category
            let subCategory = '';
            if (subtitle === 'sarees') subCategory = sareeSubcategory;
            else if (subtitle === 'dupattas') subCategory = dupattaSubcategory;
            else if (subtitle === 'stiched-kurtis' || subtitle === 'unstiched-kurtis') subCategory = kurtiSubcategory;
            else if (subtitle === 'mens-wear') subCategory = mensSubcategory
            // Add other categories here

            return {
                title,
                subtitle: `${subtitle}${subCategory ? ` - ${subCategory}` : ''}`,
                media
            };
        }
    }
})
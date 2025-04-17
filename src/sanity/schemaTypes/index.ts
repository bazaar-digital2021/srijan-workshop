
import { type SchemaTypeDefinition } from 'sanity'
import { NavbarType } from './Navbar'
import { SliderShowType } from './SliderShow'
import { HomeContentType } from './home-content'
import { FooterType } from './Footer'
import { categoriesType } from './Categories'
import { productType } from './Product'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        NavbarType,
        SliderShowType,
        HomeContentType,
        FooterType,
        categoriesType,
        productType
    ]
}


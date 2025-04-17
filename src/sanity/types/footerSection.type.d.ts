interface FooterSectionSchemaType {
    _id: string
    title: string
    expolore: {
        title: string
        slug: string
    }[];
    help: {
        title: string
        slug: string
    }[];
    categories: {
        title: string
        slug: string
    }[];
    about: {
        title: string
        slug: string
    }[];
}
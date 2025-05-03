interface NavSchemaType {
    _id: string
    title: string,
    icon: string,
    navMenu: {
        title: string,
        link: string
    }[]

}

interface SliderShowSchemaType {
    title: string,
    images: string[]
}

interface HeroSchemaType {
    title: string,
    slug: {
        current: string,
        _type: string
    },
    imageUrl: string
}
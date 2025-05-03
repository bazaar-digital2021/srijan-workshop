export interface Product {
    _id: string,
    productName: string,
    price: number,
    description: string,
    rating: number,
    image: string,
    totalDiscount: number,
    category: {
        categoryName: string,
        categorySet: string,
        subCategory: string,
    }
}

interface SubCategory {
    _id: string,
    categoryName: string,
    categorySet: string,
    subCategory: string,
    image: string
}

interface ProductById {
    _id: string,
    productName: string,
    price: number,
    totalDiscount: number,
    totalQuantity: number,
    origin: string,
    rating: number,
    description: string,
    isActive: boolean,
    isVisible: boolean,
    images: string[],
    category: {
        categoryName: string,
        categorySet: string,
        subCategory: string,
    }
}

import { client } from "./client";

const getSubCategory = async (category: string) => {
    switch (category) {
        case "sarees":
            return "sareeSubcategory"
        case "kurtis":
            return "kurtiSubcategory"
        case "dupattas":
            return "dupattaSubcategory"
        case "bottom":
            return "bottomSubcategory"
        case "mens":
            return "mensSubcategory"

        default:
            break;
    }

}

export const getAllSubCategories = async (category: string) => {
    const query = `*[_type=="categories" && categorySet=="${category}"]{
       _id,
       categoryName,
       categorySet,
       subCategory,
       "image": image.asset->url

    }`
    const data = await client.fetch(query);
    return data;
}

export const getproductByCategoryQuery = async (category: string, subCategory: string) => {
    console.log(category, subCategory)
    const query = `*[_type=="product" && category->categorySet=="${category}"]{
       _id,
       productName,
       price,
       totalDiscount,
       totalQuantity,
       origin,
       rating,
       description,
       isActive,
       isVisible,
       "image": images[0].asset->url,
       "category": category->{
        categoryName,
        categorySet,
        subCategory
       }
      
    }`

    const data = await client.fetch(query);
    return data;
}

export const getProductByIdQuery = async (id: string) => {
    const query = `*[_type=="product" && _id=="${id}" && isVisible==true][0]{
       _id,
       productName,
       price,
       totalDiscount,
       totalQuantity,
       origin,
       isActive,
       isVisible,
       "images": images[].asset->url,
       "category": category->{
        categoryName,
        categorySet,
        subCategory
       }
    }`
    const data = await client.fetch(query);
    return data;
}



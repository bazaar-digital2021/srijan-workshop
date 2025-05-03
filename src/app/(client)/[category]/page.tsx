import { getAllSubCategories, getproductByCategoryQuery } from "@/sanity/product-queries"
import CategorySection from "./_components/sub-categories-card"
import ProductCard from "./_components/porduct-card"

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params
    const subCategories = await getAllSubCategories(category)
    // console.log('subCategories', subCategories)
    const products = await getproductByCategoryQuery(category, '')
    console.log(products)
    return (
        <div className="container mx-auto px-4 py-10 ">
            <CategorySection categories={subCategories} sectionTitle={`All Categories in ${category}`} />
            <ProductCard products={products} />
        </div>
    )
}

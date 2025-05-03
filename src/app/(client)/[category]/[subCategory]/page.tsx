
export default async function SubCategoryPage({ params }: { params: Promise<{ category: string, subCategory: string }> }) {
    const { category, subCategory } = await params
    return (
        <div>
            <h1>SubCategory Page {category} {subCategory} </h1>
        </div>
    )
}
